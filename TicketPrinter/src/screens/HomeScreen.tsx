import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../helpers/theme'
import { CustomInput } from '../components/CustomInput'
import { CustomButton } from '../components/CustomButton'
import { WIDTH } from '../helpers/dimensions'
import { SettingsButton } from '../components/SettingsButton'
import { type HomeScreenNavigationProps } from '../types/AppStackNavProps'

export const HomeScreen = ({ navigation }: HomeScreenNavigationProps) => {
  const [userId, setUserId] = useState('')

  const handleSearch = () => {
    // get function
    
    //navigate to constructor
    navigation.navigate('ConstructorScreen')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.settingsButtonContainer}>
        <SettingsButton />
      </View>
      <CustomInput
        isCapitalized={false}
        placeholderText='01928374'
        isMarginNeeded={false}
        onChangeText={(text) => { setUserId(text) }}
        keyType='numeric'
        />
      <CustomButton
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        buttonTitle='FIND ME'
        handlePress={handleSearch}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.darkTheme.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: theme.darkTheme.buttonColor.buttonActive,
    width: WIDTH / 2,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {},
  settingsButtonContainer: {
    position: 'absolute',
    right: 20,
    top: 20
  }
})
