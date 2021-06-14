import React, { Component } from 'react'
import { ActionConst, Router, Scene } from 'react-native-router-flux'
import Main from './pages/Main'
import Login from './pages/Login'
import Signup from './pages/Signup'
import GroupChat from './pages/GroupChat'
import eventSetup from './pages/eventSetup' // imports create event page
import { PermissionsAndroid } from 'react-native'
import Dashboard from './pages/Dashboard'
import EventChat from './pages/EventChat'
import Chat from './pages/Chat'
import decode from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class RouterComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      long: 0,
      permission: false,
      userInfo: {
        id: '',
        email: '',
        picture: '',
        name: '',
      },
    }
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
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use geolocation')
      } else {
        console.log('Location permission denied')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')

      if (value !== null) {
        // We have data!!
        console.log('my val: ' + value)
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  async componentDidMount() {
    this._retrieveData()
    await this.requestGeoPermission()
  }

  handlesomthing(token) {
    var decoded = decode(token)

    this.setState({
      userInfo: {
        email: decoded.email,
        id: decoded.id,
        picture: decoded.picture,
        name: decoded.name,
      },
    })
  }

  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#81b71a' }}>
        <Scene key="root">
          <Scene
            key="login"
            handlesomthing={(e) => this.handlesomthing(e)}
            component={Login}
            hideNavBar="true"
          />
          <Scene
            key="dashboard"
            userInfo={this.state.userInfo}
            component={Dashboard}
            hideNavBar="true"
            type={ActionConst.REPLACE}
          />
          <Scene key="signup" component={Signup} hideNavBar="true" />
          <Scene key="eventSetup" component={eventSetup} hideNavBar="true" />
          <Scene
            key="main"
            component={Main}
            hideNavBar="true"
            type={ActionConst.REPLACE}
            initial
          />
          <Scene
            key="groupChat"
            component={GroupChat}
            title="Group Chat"
            hideNavBar="true"
            type={ActionConst.REPLACE}
          />
          <Scene
            key="eventChat"
            component={EventChat}
            title="Event Chat"
            hideNavBar="true"
            type={ActionConst.REPLACE}
          />
          <Scene
            key="Chat"
            component={Chat}
            title="Chat Page"
            hideNavBar="true"
            type={ActionConst.REPLACE}
          />
        </Scene>
      </Router>
    )
  }
}
