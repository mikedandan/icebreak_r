import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Header, Left, Right, Icon, Button, Radio, ListItem, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding'; // https://www.npmjs.com/package/react-native-geocoding
Geocoder.init('AIzaSyBBZGkvHG2ppz-zp15e9QHR3FnrEhDy8Fk');
export default class Signup extends Component {

  state = {
    eventName: '',
    eventLocation: '',
    eventTime: '',
    eventMsg: '',
    eventCode: '',
    lat: 0,
    lng: 0
  }

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
      eventOwner: "eventOwner" // WHERE DO I GRAB EVENT OWNER FROM?
    }

    // console.log('*** Event Variables ***')
    // console.log('Event Name: ' + this.state.eventName)
    // console.log('Event Location: ' + this.state.eventLocation)
    // console.log('Event Latitude: ' + locationLat)
    // console.log('Event Longitude: ' + locationLng)
    // console.log('Event ID: ' + eventCode)
    // console.log('')
    console.log('*** Event Object ***')
    console.log(event)

    // CHANGE URL TO POINT TO ANOTHER DATABASE
    // axios.post('https://icebreakr-serv.herokuapp.com/api/user/register', {
    //   evname: this.state.eventName,
    //   evlocation: this.state.eventLocation,
    //   evtime: this.state.eventTime
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error.response);
    // });
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


