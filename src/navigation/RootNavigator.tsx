import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthenticationNavigator from './AuthenticationNavigator'
import MainNavigator from './MainNavigator'

const Stack = createStackNavigator()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Auth'} component={AuthenticationNavigator} />
      <Stack.Screen name={'Main'} component={MainNavigator} />
    </Stack.Navigator>
  )
}

export default RootNavigator
