import { StyleSheet, View } from 'react-native'
import React from 'react'
import { LeftArrowButton } from '../components/LeftArrowButton'
import { type SettingsScreenNavigationProps } from '../types/AppStackNavProps'
import { theme } from '../helpers/theme'
import { CustomButton } from '../components/CustomButton'
import { WIDTH } from '../helpers/dimensions'
import { AuthorizationStore } from '../stores/auth-store'
import { useBLE } from '../helpers/useBLE'
import { DevicesList } from '../components/DevicesList'

export const SettingsScreen = ({ navigation }: SettingsScreenNavigationProps) => {
  const { requestPermissions, scanForPeripherals, allDevices, setAllDevices } = useBLE()

  const handleSearchButtonPress = async () => {
    const isPermissionsEnabled = await requestPermissions()
    if (isPermissionsEnabled) {
      setAllDevices([])
      scanForPeripherals()
    }
  }

  const handleLeftArrowButtonPress = () => {
    navigation.goBack()
  }

  const handleSignOut = () => {
    AuthorizationStore.handleSignOut()
  }

  return (
    <View style={styles.mainContainer}>
      <CustomButton
          buttonStyle={styles.buttonLogOut}
          buttonTitle='LOG OUT'
          handlePress={handleSignOut}
          />
      <View style={styles.leftArrowButtonContainer}>
        <LeftArrowButton
          handlePress={handleLeftArrowButtonPress}
          />
      </View>
      <View>
        <CustomButton
          buttonStyle={styles.buttonSearchDevices}
          buttonTitle='SCAN FOR DEVICES'
          handlePress={handleSearchButtonPress}
          />
      </View>
      <View style={styles.deviceListContainer}>
        <DevicesList
          allDevices={allDevices}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.darkTheme.backgroundColor,
    alignItems: 'center'
  },
  leftArrowButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 20
  },
  buttonSearchDevices: {
    backgroundColor: theme.darkTheme.buttonColor.buttonActive,
    width: WIDTH / 2,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  buttonLogOut: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  logoutText: {
    color: 'white'
  },
  deviceListContainer: {
    flex: 1,
    paddingVertical: 10
  }
})
