import React from 'react'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../pages/Main'

const Stack = createStackNavigator()

function AuthenticationNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Onboarding'} component={Main} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Signup'} component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthenticationNavigator
