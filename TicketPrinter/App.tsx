import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { Router } from './src/stacks/Router'

export default function App () {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Router />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})
