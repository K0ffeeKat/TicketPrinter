import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { DevicesScreen } from '../screens/DevicesScreen'
import { ConstructorScreen } from '../screens/ConstructorScreen'
import { SettingsScreen } from '../screens/SettingsScreen'

const Stack = createNativeStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='ConstructorScreen' component={ConstructorScreen}/>
      <Stack.Screen name='PrinterScreen' component={DevicesScreen}/>
      <Stack.Screen name='SettingsScreen' component={SettingsScreen}/>
    </Stack.Navigator>
  )
}
