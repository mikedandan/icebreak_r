import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Boilerplate from './components/Boilerplate';

const RouterComp = () => {



    return (
        <Router>
            <Scene key="root">

                <Scene key="boiler" component={Boilerplate} />

            </Scene>
        </Router>
    );

}

export default RouterComp;


