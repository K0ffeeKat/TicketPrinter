import { useMemo, useState } from 'react'
import { PermissionsAndroid, Platform } from 'react-native'
import { BleManager, type Device } from 'react-native-ble-plx'
import * as ExpoDevice from 'expo-device'

export const useBLE = () => {
  const [allDevices, setAllDevices] = useState<Device[]>([])

  const bleManager = useMemo(() => new BleManager(), [])

  // PERMISSIONS

  const requestAndroid31Permissions = async () => {
    const bluetoothScanPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: 'Scan Permission',
        message: 'App requires Bluetooth scanning',
        buttonPositive: 'OK'
      }
    )
    const bluetoothConnectPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: 'Connect Permission',
        message: 'App requires Bluetooth connecting',
        buttonPositive: 'OK'
      }
    )
    const bluetoothFineLocationPermissions = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Fine Location',
        message: 'App requires fine location',
        buttonPositive: 'OK'
      }
    )

    return (
      bluetoothScanPermission === 'granted' &&
      bluetoothConnectPermission === 'granted' &&
      bluetoothFineLocationPermissions === 'granted'
    )
  }

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Bluetooth requires Location',
            buttonPositive: 'OK'
          }
        )

        return granted === PermissionsAndroid.RESULTS.GRANTED
      } else {
        const isAndroid31PermissionsGranted = await requestAndroid31Permissions()
        return isAndroid31PermissionsGranted
      }
    } else {
      return true
    }
  }
  //

  // SCAN FOR DEVICES

  const isDuplicateDevice = (devices: Device[], nextDevice: Device) =>
    devices.findIndex((device) => nextDevice.id === device.id) > -1

  const scanForPeripherals = () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error)
      }
      if (device) {
        setAllDevices((prevState) => {
          if (!isDuplicateDevice(prevState, device)) {
            return [...prevState, device]
          }
          return prevState
        })
      }
    })
  }

  return {
    scanForPeripherals,
    requestPermissions,
    allDevices,
    setAllDevices
  }
}
