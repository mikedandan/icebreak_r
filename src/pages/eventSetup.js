import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Header, Left, Right, Icon, Button, Radio, ListItem, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
export default class Signup extends Component {

  state = {
    eventName: '',
    eventLocation: '',
    eventTime: '',
    eventCode: ''
  }

  // Use this function to check if data from the page is being passed on to variables
  checkVariables = () => {
    console.log(this.state.eventName)
    console.log(this.state.eventLocation)
    console.log(this.state.eventTime)
  }

  // Use this fuction to post variables to the DB
  addEventDB = () => {
    console.log(this.state.eventName)
    console.log(this.state.eventLocation)
    console.log(this.state.eventTime)
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

          <View style={{ marginBottom: 75 }}>
            <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
          </View>

          <Image source={require('../images/icebreakr-logo-icon.png')} style={{ position: 'absolute', top: 15, alignSelf: 'center' }} />
          <View style={{ height: '100%', justifyContent: 'center', }} >
          
          <View style={{ marginBottom: 130 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 40 }}>Event Setup</Text>
          </View>
          
          <Form style={styles.form}>
             <Item >
               <Label>Event Setup</Label>
             </Item>
             <Item floatingLabel>
               <Label>Event Name</Label>
               <Input onChangeText={(value) => this.setState({ eventName: value })} />
             </Item>
             <Item floatingLabel>
               <Label>Event Location</Label>
               <Input onChangeText={(value) => this.setState({ eventLocation: value })} />
             </Item>
             <Item floatingLabel last>
               <Label>Event Time</Label>
               <Input onChangeText={(value) => this.setState({ eventTime: value })} />
             </Item>
           </Form >

           <View style={{ backgroundColor: '#F5FCFF', zIndex: 98 }}>
             <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Your Event Details</Text>
             <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Your event chat will be specific to your event. Only people with your event QR code or ID will be able to join yor event</Text>

             <Button info style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 150 }} onPress={() => this.checkVariables()}>SETUP EVENT</Text></Button>
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

// BACKUP
// render() {
//   return (
//     <ScrollView >
//       <LinearGradient
//         colors={['#42AAD8', '#A8D7F7']}
//         style={styles.container}>

//         <View style={{ zIndex: 97 }}>
//         <View style={{ marginBottom: 130 }}></View>
//           <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>

//           <Text style={{ textAlign: 'center', marginBottom: 75 }}></Text>
//           <Image source={require('../images/icebreakr-logo-icon.png')} style={{ position: 'absolute', top: 15, alignSelf: 'center' }} />

//           <Form style={styles.form}>
//             <Item >
//               <Label>Event Setup</Label>
//             </Item>
//             <Item floatingLabel>
//               <Label>Event Name</Label>
//               <Input onChangeText={(value) => this.setState({ eventName: value })} />
//             </Item>
//             <Item floatingLabel>
//               <Label>Event Location</Label>
//               <Input onChangeText={(value) => this.setState({ eventLocation: value })} />
//             </Item>
//             <Item floatingLabel last>
//               <Label>Event Time</Label>
//               <Input onChangeText={(value) => this.setState({ eventTime: value })} />
//             </Item>
//           </Form >

//           <View style={{ backgroundColor: '#F5FCFF', zIndex: 98 }}>
//             <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Your Event Details</Text>
//             <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Your event chat will be specific to your event. Only people with your event QR code or ID will be able to join yor event</Text>

//             <Button info style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 150 }} onPress={() => this.checkVariables()}>SETUP EVENT</Text></Button>
//           </View>
//         </View>
//       </LinearGradient>
//     </ScrollView>
//   );
// }
// }

