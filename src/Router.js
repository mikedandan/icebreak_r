import React, { Component } from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Boilerplate from './components/Boilerplate';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GroupChat from './pages/GroupChat'
import eventSetup from './pages/eventSetup'; // imports create event page
import { Text, View, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Dashboard from './pages/Dashboard';
import decode from 'jwt-decode';

export default class RouterComp extends Component {



    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            long: 0,
            permission: false,
            userInfo: {
                id: '',
                email: '',
                picture: '',
                name: '',
            }
        };
    }

    setPermission(bool) {
        this.setState({ permission: bool })
    }
    async requestGeoPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'IceBreakr Location Permission',
                    message:
                        'Icebreakr needs access to your camera ' +
                        'so you can creep on people.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use geolocation');
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }


    async componentDidMount() {
        await this.requestGeoPermission();
     
    }

     handlesomthing (token) {

        var decoded = decode(token);
        console.log(decoded);
        

        this.setState({ 
            userInfo :{
                email: decoded.email,
                id: decoded.id,
                picture: decoded.picture,
                name: decoded.name
            } 
        });
        console.log(this.state.userInfo);

    }


    render() {
        return (
            <Router>
                <Scene key="root">

                    <Scene key="login" handlesomthing={(e) => this.handlesomthing(e)} component={Login} hideNavBar='true' type={ActionConst.REPLACE} />
                    <Scene key="dashboard" component={Dashboard} hideNavBar='true' type={ActionConst.REPLACE} />
                    <Scene key="signup" component={Signup} hideNavBar='true' type={ActionConst.REPLACE} />
                    <Scene key="eventSetup" component={eventSetup} hideNavBar='true' type={ActionConst.REPLACE} />
                    <Scene key="main" component={Main} hideNavBar='true' type={ActionConst.REPLACE} initial />
                    <Scene key="groupChat" userInfo = {this.state.userInfo} component={GroupChat} hideNavBar='true' type={ActionConst.REPLACE} />
                </Scene>
            </Router>
        );
    };

};





