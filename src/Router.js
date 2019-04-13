import React, { Component } from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Boilerplate from './components/Boilerplate';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import eventSetup from './pages/eventSetup'; // imports create event page

const RouterComp = () => {



    return (
        <Router>
            <Scene key="root">

                <Scene key="login" component={Login}  hideNavBar='true'  type={ActionConst.REPLACE}  />
                <Scene key="signup" component={Signup}  hideNavBar='true'  type={ActionConst.REPLACE}  />
                <Scene key="eventSetup" component={eventSetup}  hideNavBar='true'  type={ActionConst.REPLACE}  />
                <Scene key="main" component={Main}  hideNavBar='true' type={ActionConst.REPLACE} initial />
                
            </Scene>
        </Router>
    );

}

export default RouterComp;


