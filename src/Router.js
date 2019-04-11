import React, { Component } from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Boilerplate from './components/Boilerplate';
import Main from './pages/Main';
import Page2 from './pages/page2';
import Signup from './pages/Signup';
const RouterComp = () => {



    return (
        <Router>
            <Scene key="root">

                <Scene key="page2" component={Page2}  hideNavBar='true'  type={ActionConst.REPLACE}  />
                <Scene key="signup" component={Signup}  hideNavBar='true'  type={ActionConst.REPLACE}  />
                <Scene key="main" component={Main}  hideNavBar='true' type={ActionConst.REPLACE} initial />
                
            </Scene>
        </Router>
    );

}

export default RouterComp;


