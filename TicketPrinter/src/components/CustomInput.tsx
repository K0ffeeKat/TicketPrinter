import { StyleSheet, View, TextInput } from 'react-native'
import React, { type SetStateAction } from 'react'
import { WIDTH } from '../helpers/dimensions'
import { type KeyboardType } from 'react-native/Libraries/Components/TextInput/TextInput'

interface Props {
  isCapitalized: boolean
  placeholderText: string
  isMarginNeeded: boolean
  isSecured?: boolean
  onChangeText: Dispatch<SetStateAction<string | number>>
  keyType?: KeyboardType
}

export const CustomInput = ({ placeholderText, isMarginNeeded, isSecured, onChangeText, isCapitalized, keyType }: Props) => {
  return (
    <View style={isMarginNeeded ? [styles.inputBar, styles.inputBarWithMargin] : styles.inputBar}>
      <TextInput
        onChangeText={onChangeText}
        keyboardType={ keyType ?? 'default' }
        autoCapitalize={ isCapitalized ? 'sentences' : 'none' }
        style={styles.inputText}
        placeholder={placeholderText}
        secureTextEntry={isSecured}
        autoComplete='off'
        />
    </View>
  )
}

const styles = StyleSheet.create({
  inputBar: {
    backgroundColor: '#82EAF3',
    width: WIDTH / 1.3,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  inputBarWithMargin: {
    marginTop: 5
  },
  inputText: {
    fontSize: 15
  }
})
