import { StyleSheet, View } from 'react-native'
import React from 'react'
import { type ConstructorScreenNavigationProps } from '../types/AppStackNavProps'
import { theme } from '../helpers/theme'
import { LeftArrowButton } from '../components/LeftArrowButton'
import { observer } from 'mobx-react'

export const ConstructorScreen = observer(({ navigation }: ConstructorScreenNavigationProps) => {
  const handleLeftArrowPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftArrowButtonContainer}>
        <LeftArrowButton
          handlePress={handleLeftArrowPress}
          />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.darkTheme.backgroundColor
  },
  leftArrowButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 20
  }
})
