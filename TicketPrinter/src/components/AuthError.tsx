import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  errorMessage: []
}

export const AuthError = ({ errorMessage }: Props) => {
  return (
      <Text>{errorMessage}</Text>
  )
}

const styles = StyleSheet.create({})