import React, { Component } from 'react';
import { Text, View, Image, ScrollView, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Left, Right, Icon, Button, Radio, ListItem, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import generateName from 'sillyname';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const gender = [
  { label: "Male ", value: 0 },
  { label: "Female ", value: 1 },
  { label: "Prefer not to say", value: 2 },
];

const picArr = [
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_brown_bear.png', 
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_dog.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_dolphin.png', 
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_elephant.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_fox.png', 
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_gariffe.png', 
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_hedgehog.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_kangaroo.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_killer_whale.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_kowala.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_lion.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_lioness.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_merecat.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_ox.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_panda.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_polar_bear.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_rhyno.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_tiger.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_walrus.png',
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_zebra.png'
];


export default class Signup extends Component {

  //test
  state = {
    myName: '',
    email: '',
    password: '',
    picture: '',
    gender: []
  }

  componentWillMount = () => {
    this.generate();
    this.getAvatar();
  }

  getAvatar = () => {
    const uri = Math.floor(Math.random() * picArr.length)
    this.setState({ picture: picArr[uri], ran: uri });
    console.log('testing' + this.state.picture);
    console.log("the random number is" + picArr[uri]);
  };

  generate = () => {

    let nickname = generateName();
    this.setState({ myName: nickname })
  };

  checkRegister = () => {

    console.log(`VOID ENTERED \n email: ${this.state.email} \n password: ${this.state.password} \n picture: ${this.state.picture} \n Remeber to comment this log out`)
    axios.post('http://10.0.2.2:3000/api/user/register', {
      displayName: this.state.myName,
      email: this.state.email,
      password: this.state.password,
      picture: this.state.picture,
      gender: this.state.gender
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

      <LinearGradient
        colors={['#42AAD8', '#A8D7F7']}
        style={styles.container}>

        <View style={styles.random}>
          <Text style={{ color: 'white', textAlign: 'center', marginBottom: 20 }}>SIGN UP</Text>
          <Image source={{ uri: this.state.picture }} style={{ width: 100, height: 100 }} />
        </View>

        <KeyboardAvoidingView style={styles.genderArea}>
          <Form style={styles.form} >
            <View style={{flexDirection: 'row'}}>
              <Text style={{ fontSize: 20, marginTop: 10, paddingLeft: 10 }}>{this.state.myName}</Text>
              <Button transparent onPress={() => this.generate()} >
                <Icon style={{ fontSize: 20 }} name="sync" />

              </Button>
            </View>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(value) => this.setState({ email: value })} />
            </Item>

            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(value) => this.setState({ password: value })} />
            </Item>
          </Form >

          <View style={{ backgroundColor: '#F5FCFF', flex: 1, justifyContent: 'space-around' }}>
            <View style={{ alignSelf: 'center', position: 'absolute', bottom: 10  }}>

              <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20 }}>Your Gender</Text>
              <RadioForm
                style={{ alignSelf: 'center', marginTop: 15 }}
                radio_props={gender}
                initial={2}
                formHorizontal={true}
                onPress={(value) => this.setState({ gender: value })} />

              <Button onPress={() => this.checkRegister()} info style={styles.button}><Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }} >CREATE ACCOUNT</Text></Button>
            </View>
          </View>
        </KeyboardAvoidingView>

      </LinearGradient>

    );
  }
}


const styles = {

  random: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignSelf: 'center'
  },
  form: {
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 3,
    width: '90%',
    minHeight: 250,
    marginBottom: -65,
  },
  genderArea: {
    flex: 2,
  },
  button: {
    alignSelf: 'center',
    width: 250,
    height: 55,
    borderRadius: 15,
    marginTop: 15,
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
};