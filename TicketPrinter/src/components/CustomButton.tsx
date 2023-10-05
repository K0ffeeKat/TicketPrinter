import { Text, TouchableOpacity, type ViewStyle, type TextStyle } from 'react-native'
import React from 'react'

interface Props {
  buttonStyle: ViewStyle
  textStyle: TextStyle
  buttonTitle: string
  handlePress: () => void
}

export const CustomButton = ({ buttonStyle, textStyle, buttonTitle, handlePress }: Props) => {
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={handlePress}
      >
      <Text style={textStyle}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}
