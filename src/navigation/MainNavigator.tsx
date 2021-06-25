import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '../features/Dashboard'
import GroupChat from '../features/GroupChat'
import EventChat from '../features/EventChat'
import Chat from '../features/Chat'
import eventSetup from '../features/eventSetup'

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
