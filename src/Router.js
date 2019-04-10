import React, { Component } from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Boilerplate from './components/Boilerplate';
import Home from './pages/Home';
import Page2 from './pages/page2';
const RouterComp = () => {



    return (
        <Router>
            <Scene key="root">

                <Scene key="page2" component={Page2}  hideNavBar='true'  type={ActionConst.REPLACE}  />
                <Scene key="home" component={Home}  hideNavBar='true' type={ActionConst.REPLACE} initial />
                
            </Scene>
        </Router>
    );

}

export default RouterComp;


