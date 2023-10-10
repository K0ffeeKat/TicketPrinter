import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../helpers/theme'
import { CustomInput } from '../components/CustomInput'
import { CustomButton } from '../components/CustomButton'
import { WIDTH } from '../helpers/dimensions'
import { SettingsButton } from '../components/SettingsButton'
import { type HomeScreenNavigationProps } from '../types/AppStackNavProps'
import { MainStore } from '../stores/main-store'
import { observer } from 'mobx-react'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'

export const HomeScreen = observer(({ navigation }: HomeScreenNavigationProps) => {
  const [userId, setUserId] = useState<number | null>(null)

  const generatePDF = async (htmlTemplate: string) => {
    const file = await printToFileAsync({
      html: htmlTemplate,
      base64: false
    })

    await shareAsync(file.uri)
  }

  async function handleSearch () {
    await MainStore.handleUserInfoRequest(userId)
    if (MainStore.userInfo.length > 0 && MainStore.fetchingError === '') {
      const [{ name, surname, position, company }] = MainStore.userInfo
      const htmlTemplate = `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body style="text-align: center;">
          <h1 style="font-size: 25px; font-family: Helvetica Neue; font-weight: normal;">
            ${name} ${surname}
          </h1>
          <h2 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
            ${company}
          </h2>
          <h3 style="font-size: 20px; font-family: Helvetica Neue; font-weight: normal;">
            ${position}
          </h3>
        </body>
      </html>
      `
      await generatePDF(htmlTemplate)
    }
  }

  const handleSettingsPress = () => {
    navigation.navigate('SettingsScreen')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.settingsButtonContainer}>
        <SettingsButton
          handlePress={handleSettingsPress}
          />
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
})

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
