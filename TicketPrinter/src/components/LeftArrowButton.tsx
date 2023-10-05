import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import iconArrowLeft from '../assets/icons/icon_arrow_left.png'

interface Props {
  handlePress: () => void
}

export const LeftArrowButton = ({ handlePress }: Props) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={iconArrowLeft}
        tintColor={'#82EAF3'}
        style={styles.icon}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 27,
    height: 20
  }
})
