import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthenticationNavigator from './AuthenticationNavigator'
import MainNavigator from './MainNavigator'
import useAuth from '../hooks/useAuth'

const Stack = createStackNavigator()

function RootNavigator() {
  const { authenticated } = useAuth()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!authenticated ? (
        <Stack.Screen name={'Auth'} component={AuthenticationNavigator} />
      ) : (
        <Stack.Screen name={'Main'} component={MainNavigator} />
      )}
    </Stack.Navigator>
  )
}

export default RootNavigator
