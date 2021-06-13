import React from 'react'
import RouterComp from './src/Router'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <RouterComp />
    </NavigationContainer>
  )
}

export default App
