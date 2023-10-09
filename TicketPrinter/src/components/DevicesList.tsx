import { StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { type Device } from 'react-native-ble-plx'
import { WIDTH } from '../helpers/dimensions'

interface Props {
  allDevices: Device[]
}

export const DevicesList = ({ allDevices }: Props) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.deviceContainer}>
        <Text style={{ color: 'white' }}>{item.localName ? item.localName : 'Unknown Device'}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={allDevices}
      renderItem={renderItem}
      keyExtractor={device => device.id}
      />
  )
}

const styles = StyleSheet.create({
  deviceContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    width: WIDTH / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
    borderRadius: 10
  }
})
