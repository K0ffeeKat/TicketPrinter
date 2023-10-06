import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LeftArrowButton } from '../components/LeftArrowButton'
import { type SettingsScreenNavigationProps } from '../types/AppStackNavProps'
import { theme } from '../helpers/theme'
import { CustomButton } from '../components/CustomButton'
import { WIDTH } from '../helpers/dimensions'
import { AuthorizationStore } from '../stores/auth-store'

export const SettingsScreen = ({ navigation }: SettingsScreenNavigationProps) => {
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
          textStyle={styles.logoutText}
          />
      <View style={styles.leftArrowButtonContainer}>
        <LeftArrowButton
          handlePress={handleLeftArrowButtonPress}
          />
      </View>
      <View>
        <CustomButton
          buttonStyle={styles.buttonSearchDevices}
          buttonTitle='SEARCH DEVICES'
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
  }
})
