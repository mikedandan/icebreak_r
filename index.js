// import libraries 
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import RouterComp from './src/Router';
import Chat from './src/pages/Chat';
import Dashboard from './src/pages/Dashboard';

// Create a component 


const App = () => {
    return (

            <RouterComp />
    
    );
};


// Render it to the device 
AppRegistry.registerComponent('icebreakr', () => App);
console.disableYellowBox = true