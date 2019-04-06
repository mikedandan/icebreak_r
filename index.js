// import libraries 
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import RouterComp  from './src/Router';
import Boilerplate from './src/components/Boilerplate';
import ThisPage from './src/pages/ThisPage';
// Create a component 

const App = () => {
    return (
       
             <ThisPage />
      
  
      
    );
};


// Render it to the device 
AppRegistry.registerComponent('icebreakr', () => App);
