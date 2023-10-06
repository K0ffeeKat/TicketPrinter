import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WIDTH } from '../helpers/dimensions'
import { observer } from 'mobx-react'

interface Props {
  userInfo: any
}

export const BadgePreview = observer(({ userInfo }: Props) => {
  const [{ name, surname, company, position }] = userInfo

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.name}>{name} {surname}</Text>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.position}>{position}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F9404B',
    paddingTop: 100,
    paddingHorizontal: 40,
    width: WIDTH / 1.2,
    aspectRatio: 1.5 / 2,
    borderRadius: 10
  },
  name: {
    fontSize: 30,
    color: 'white'
  },
  company: {
    fontSize: 20,
    paddingTop: 15,
    color: 'white'
  },
  position: {
    fontSize: 18,
    paddingTop: 5,
    color: 'white'
  }
})
