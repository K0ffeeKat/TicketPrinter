import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { CustomInput } from '../components/CustomInput'
import { CustomButton } from '../components/CustomButton'
import { theme } from '../helpers/theme'
import { WIDTH } from '../helpers/dimensions'
import { AuthorizationStore } from '../stores/auth-store'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn () {
    AuthorizationStore.handleLogin(email, password)
  }

  return (
    <View style={styles.mainContainer}>
      <CustomInput
        placeholderText='jane.doe@email.com'
        isMarginNeeded={false}
        isSecured={false}
        isCapitalized={false}
        onChangeText={setEmail}
        />
      <CustomInput
        placeholderText='********'
        isMarginNeeded={true}
        isCapitalized={false}
        isSecured={true}
        onChangeText={setPassword}
        />
      <CustomButton
        buttonStyle={styles.button}
        buttonTitle='SIGN IN'
        handlePress={handleSignIn}
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
  }
})
