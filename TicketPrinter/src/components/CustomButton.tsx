import { Text, TouchableOpacity, type ViewStyle } from 'react-native'
import React from 'react'

interface Props {
  buttonStyle: ViewStyle
  buttonTitle: string
  handlePress: () => void
}

export const CustomButton = ({ buttonStyle, buttonTitle, handlePress }: Props) => {
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={handlePress}
      >
      <Text>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}
