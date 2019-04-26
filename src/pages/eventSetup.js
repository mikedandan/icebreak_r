import React, { Component } from 'react';
import { Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { Container, Header, Left, Right, Icon, Button, Radio, ListItem, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Geocoder from 'react-native-geocoding'; // https://www.npmjs.com/package/react-native-geocoding
import axios from 'axios';
Geocoder.init('AIzaSyBBZGkvHG2ppz-zp15e9QHR3FnrEhDy8Fk');
export default class Signup extends Component {

  state = {
    eventName: '',
    eventLocation: '',
    eventTime: '',
    eventMsg: '',
    eventCode: '',
    lat: 0,
    lng: 0,
    userInfo: {}
  }

componentDidMount = () => {
    console.log('sup');
    this._retrieveData();
}

_handleLogOut = () => {
    console.log('hello world');
    AsyncStorage.removeItem('token');
    alert('You have been logged out.');
    Actions.main();
}

_retrieveData = async () => {
    console.log('hello');
    try {

        const token = await AsyncStorage.getItem('token');

        if (token !== null) {
            // We have data!!
            console.log('user saved locally');
            console.log(token);
            var decoded = decode(token);



            this.setState({
                userInfo: {
                    email: decoded.email,
                    id: decoded.id,
                    picture: decoded.picture,
                    name: decoded.name
                }
            });
            console.log(this.state.userInfo);

        } else {

            console.log('no data');

        }

    } catch (error) {
        // Error retrieving data
    }
};

  // **************************************************************************************************

  generateEvent = async () => {
    await Geocoder.from(this.state.eventLocation)
      .then(json => {
        var location = json.results[0].geometry.location;
        this.setState({ lat: location.lat })
        this.setState({ lng: location.lng })
      })
      .catch(error => console.warn(error));

    eventCode = this.state.eventName + Math.floor(10000 + Math.random() * 90000)
    eventMsg = 'Your new event ID is'
    this.setState({ eventCode: eventCode })
    this.setState({ eventMsg: eventMsg })
    let event = {
      eventName: this.state.eventName,
      eventLocation: this.state.eventLocation,
      eventLat: this.state.lat,
      eventLng: this.state.lng,
      eventId: eventCode,
      // eventOwner: this.state.userInfo.id
    
    }

    console.log(event)

    //CHANGE URL TO POINT TO ANOTHER DATABASE
    axios.post('http://localhost:3000/api/event/newevent', {
      eventName: this.state.eventName,
      eventLocation: this.state.eventLocation,
      lat: this.state.lat,
      lng: this.state.lng,
      eventCode: eventCode
      // id: this.state.userInfo.id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }

  render() {
    return (
      <ScrollView >
        <LinearGradient
          colors={['#42AAD8', '#A8D7F7']}
          style={styles.container}>

          <View style={{ marginBottom: 50 }}>
            <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
          </View>

          <Image source={require('../images/icebreakr-logo-icon.png')} style={{ position: 'absolute', top: 15, alignSelf: 'center' }} />
          <View style={{ height: '100%', justifyContent: 'center', }} >
            <View style={{ marginBottom: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 40 }}>Event Setup</Text>
            </View>

            <View style={{ marginBottom: 45 }}>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Your event chat will be specific to your event</Text>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Only people with your event ID will be able to join your event</Text>
            </View>

            <Form style={styles.form}>
              <Item floatingLabel>
                <Label>Event Name</Label>
                <Input onChangeText={(value) => this.setState({ eventName: value })} />
              </Item>
              <Item floatingLabel>
                <Label>Event Location (Venue or Address)</Label>
                <Input onChangeText={(value) => this.setState({ eventLocation: value })} />
              </Item>
            </Form>

            <View style={{ marginBottom: 45 }}></View>

            <View style={{ backgroundColor: '#F5FCFF', zIndex: 98 }}>
              <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>{this.state.eventMsg}</Text>
              <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>{this.state.eventCode}</Text>
              <Button info style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 150 }} onPress={() => this.generateEvent()}>SETUP EVENT</Text></Button>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = {
  thisIsAStyle: {
    fontSize: 50,
    marginTop: 40
  },
  redTex: {
    color: 'red'
  },
  button: {
    // backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 25,
    marginTop: 20,
    borderRadius: 10
  },
  form: {
    backgroundColor: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    // position:'absolute',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    width: 330
  },
  container: {
    flex: 1,
  }
};


