// import libraries 
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import RouterComp from './src/Router';
import GroupChat from './src/pages/GroupChat';
// Create a component 


const App = () => {
    return (

            <RouterComp />
    
    );
};


// Render it to the device 
AppRegistry.registerComponent('icebreakr', () => App);
