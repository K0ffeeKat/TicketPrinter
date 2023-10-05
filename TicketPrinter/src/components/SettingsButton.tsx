import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import iconSettings from '../assets/icons/icon_settings.png'

export const SettingsButton = () => {
  return (
    <TouchableOpacity>
      <Image
        source={iconSettings}
        tintColor={'#82EAF3'}
        style={styles.icon}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 30
  }
})
