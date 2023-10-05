import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { CustomInput } from '../components/CustomInput'
import { CustomButton } from '../components/CustomButton'
import { theme } from '../helpers/theme'
import { WIDTH } from '../helpers/dimensions'
import { AuthorizationStore } from '../stores/auth-store'
import { AuthError } from '../components/AuthError'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { authError } = AuthorizationStore

  function handleSignIn (email: string, password: string) {
    AuthorizationStore.handleLogin(email, password)
  }

  return (
    <View style={styles.mainContainer}>
      <CustomInput
        placeholderText='jane.doe@email.com'
        isMarginNeeded={false}
        isSecured={false}
        isCapitalized={false}
        onChangeText={(text) => { setEmail(text)}}
        />
      <CustomInput
        placeholderText='********'
        isMarginNeeded={true}
        isCapitalized={false}
        isSecured={true}
        onChangeText={(text) => { setPassword(text) }}
        />
      <CustomButton
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        buttonTitle='SIGN IN'
        handlePress={() => { handleSignIn(email, password) }}
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
  buttonText: {}
})
