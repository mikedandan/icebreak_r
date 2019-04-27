import React, { Component } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
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

  formExpand = () => {
    if (this.state.eventCode === '') {
      return console.log('do nothing');

    }
    else {
      return (
        <View style={{borderColor: 'orange', borderWidth: 4, borderRadius: 15, margin: 20}}>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginTop: 10, marginBottom: 10 }}>{this.state.eventMsg}</Text>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginTop: 10, marginBottom: 10 }}>{this.state.eventCode}</Text>
        </View>
      );
    }

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

      <LinearGradient
        colors={['#42AAD8', '#A8D7F7']}
        style={styles.container}>


        {/* <View style={{ marginBottom: 50 }}>
          <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
        </View> */}

        <View style={{ marginBottom: 5, flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
          <Image source={require('../images/icebreakr-logo-icon.png')} style={{ alignSelf: 'center', marginBottom: 20 }} />
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Event Setup</Text>
        </View>


        <KeyboardAvoidingView style={{ flex: 2 }}>

          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Event Name</Label>
              <Input onChangeText={(value) => this.setState({ eventName: value })} />
            </Item>
            <Item floatingLabel>
              <Label>Event Location (Venue or Address)</Label>
              <Input onChangeText={(value) => this.setState({ eventLocation: value })} />
            </Item>
            {this.formExpand()}
          </Form>

          <View style={{ backgroundColor: '#F5FCFF', flex: 1, justifyContent: 'space-around' }}>
            <View style={{ position: 'absolute', bottom: 10, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', fontSize: 20, marginLeft: 15, marginRight: 15, marginBottom: 40, }}>Your event chat will be specific to your event.  Only people with your event ID will be able to join your event</Text>
              <Button info style={styles.button}><Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }} onPress={() => this.generateEvent()}>SETUP EVENT</Text></Button>
            </View>

          </View>

        </KeyboardAvoidingView>

      </LinearGradient>

    );
  }
}

const styles = {

  redTex: {
    color: 'red'
  },
  button: {
    // backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 15,
    width: 250,
    height: 55,
    borderRadius: 15,
    justifyContent: 'space-around'
  },
  form: {
    backgroundColor: 'white',
    // textAlign: 'center',
    // position:'absolute',
    elevation: 3,
    // justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    marginBottom: -65,
    minHeight: 180
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  }
};


