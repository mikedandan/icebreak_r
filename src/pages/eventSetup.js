import React, { Component } from 'react';
import { Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { Container, Header, Left, Right, Icon, Button, Radio, ListItem, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Geocoder from 'react-native-geocoding'; // https://www.npmjs.com/package/react-native-geocoding
import axios from 'axios';
import decode from 'jwt-decode';
import NavBar from '../components/Nav2';
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
  _retrieveData = async () => {
    console.log('hello');
    try {

      const token = await AsyncStorage.getItem('token');

      if (token !== null) {
        // We have data!!
        console.log('user saved locally');
        console.log(token);
        var decoded = decode(token);

        console.log("decoded" + decoded);

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
      console.log(error);
      // Error retrieving data
    }
  };

  formExpand = () => {
    if (this.state.eventCode === '') {
      return console.log('do nothing');

    }
    else {
      return (
        <View style={{ borderColor: 'orange', borderWidth: 4, borderRadius: 15, margin: 20 }}>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginTop: 10, marginBottom: 10 }}>{this.state.eventMsg}</Text>
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginTop: 10, marginBottom: 10 }}>{this.state.eventCode}</Text>
        </View>
      );
    }

  }

  generateEvent = async () => {
    const self = this;
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
      eventOwner: this.state.userInfo.id
    }

    console.log(event)


    //CHANGE URL TO POINT TO ANOTHER DATABASE
    //https://icebreakr-serv.herokuapp.com/
    //http://10.0.2.2:3000/
    axios.post('https://icebreakr-serv.herokuapp.com/api/event/newevent', {
      eventName: this.state.eventName,
      eventLocation: this.state.eventLocation,
      lat: this.state.lat,
      lng: this.state.lng,
      eventCode: eventCode,
      id: this.state.userInfo.id
    })
      .then(function (response) {
        console.log("testors");
        console.log("response: ", response)
        //console.log(response);
        const newMessage = {
          "nickName": "Event Admin",
          "message": `Welcome to ${eventCode} chat.`,
          "picture": self.state.userInfo.picture,
          "userID": self.state.userInfo.id,
          "lon":  self.state.lng,
          "lat": self.state.lat,
          "namespace": eventCode,
          "date": Date.now()
        }
        console.log("HELLO"+newMessage);
        console.log(newMessage);
        axios.post('https://icebreakr-serv.herokuapp.com/api/message/new', newMessage)
            .then(function (response) {
                console.log("YIKESSS")
                //console.log(response);
                //after pushing to database, clear the input
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (

      <LinearGradient
        colors={['#42AAD8', '#A8D7F7']}
        style={styles.container}>


        {/* <View style={{ marginBottom: 50 }}>
          <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
        </View> */}




        <View style={{ flex: 2 }}>

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

        </View>

      </LinearGradient>

    )
  };

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


