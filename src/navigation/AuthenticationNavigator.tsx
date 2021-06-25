import React from 'react'
import Login from '../features/login/Login'
import Signup from '../features/Signup'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from '../features/Onboarding'
import { AuthenticationStackParamsList } from './types'

const Stack = createStackNavigator<AuthenticationStackParamsList>()

function AuthenticationNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Onboarding'} component={Onboarding} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Signup'} component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthenticationNavigator
