import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '../pages/Dashboard'
import GroupChat from '../pages/GroupChat'
import EventChat from '../pages/EventChat'
import Chat from '../pages/Chat'
import eventSetup from '../pages/eventSetup'

const Stack = createStackNavigator()

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
      <Stack.Screen name={'EventSetup'} component={eventSetup} />
      <Stack.Screen name={'GroupChat'} component={GroupChat} />
      <Stack.Screen name={'EventChat'} component={EventChat} />
      <Stack.Screen name={'Chat'} component={Chat} />
    </Stack.Navigator>
  )
}

export default MainNavigator
