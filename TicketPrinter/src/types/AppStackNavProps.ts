import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export type AppStackParamList = {
  HomeScreen: undefined
  ConstructorScreen: undefined
  SettingsScreen: undefined
  DevicesScreen: undefined
}

export type AppStackNavigationProps<Route extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, Route>

export type HomeScreenNavigationProps = AppStackNavigationProps<'HomeScreen'>
export type ConstructorScreenNavigationProps = AppStackNavigationProps<'ConstructorScreen'>
export type SettingsScreenNavigationProps = AppStackNavigationProps<'SettingsScreen'>
export type DevicesScreenNavigationProps = AppStackNavigationProps<'DevicesScreen'>
