import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation/RootNavigator'
import RouterComp from './src/Router'

const App = () => {
  return (
    <NavigationContainer>
      <RouterComp />
    </NavigationContainer>
  )
}

export default App
