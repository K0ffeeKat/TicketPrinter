import React from 'react'
import { AuthStack } from './AuthStack'
import { AppStack } from './AppStack'
import { AuthorizationStore } from '../stores/auth-store'
import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react'

export const Router = observer(() => {
  const { isUser } = AuthorizationStore

  return (
    <NavigationContainer>
      {isUser ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
})
