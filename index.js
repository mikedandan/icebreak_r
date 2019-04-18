// import libraries 
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import RouterComp from './src/Router';
import Boilerplate from './src/components/Boilerplate';
import ThisPage from './src/pages/ThisPage';
import GeoLoc from "./src/pages/test"
import GroupChat from './src/pages/GroupChat';
// Create a component 


const App = () => {
    return (

            // <GeoLoc />
            <GroupChat />
    
    );
};


// Render it to the device 
AppRegistry.registerComponent('icebreakr', () => App);
