import React, { Component } from 'react';
import { Text, View, Image, ScrollView, ToastAndroid } from 'react-native';
import { Container, Header, Left, Right, Icon, Button, Radio, ListItem, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import generateName from 'sillyname';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import image1 from '../images/AddImage.png'
import image2 from '../images/calendar-icon.png'
import image3 from '../images/AddImage2x.png'


const picArr = [image1, image2, image3]
const gender = [
  { label: "Male ", value: 0 },
  { label: "Female ", value: 1 },
  { label: "Prefer not to say", value: 2 },
];

// var avatarArr = ['../images/AddImage.png'];
// var randomItem = avatarArr[Math.floor(Math.random() * avatarArr.length)];


export default class Signup extends Component {

  //test
  state = {
    myName: 'sdfd',
    email: '',
    password: '',
    picture: '',
    gender: []
  }


  componentWillMount = () => {

    const index = picArr[Math.floor(Math.random() * picArr.length)]
    this.generate();
    this.setState({ picture: index })

  }
  generate = () => {
    console.log('sup');
    let nickname = generateName();
    this.setState({ myName: nickname })
  };

  checkRegister = () => {


    console.log(this.state)
    console.log(`VOID ENTERED \n email: ${this.state.email} \n password: ${this.state.password} \n Remeber to comment this log out`)
    axios.post('https://icebreakr-serv.herokuapp.com/api/user/register', {
      name: this.state.myName,
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
    console.log(this.state.picture)
    return (
      <ScrollView >

        <LinearGradient
          colors={['#42AAD8', '#A8D7F7']}
          style={styles.container}>
          <View>
            <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
            <Text style={{ color: 'white', textAlign: 'center', marginBottom: 20 }}>SIGN UP</Text>
            <Image source={ this.state.picture} />


            {/* <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Randomly selected Name</Text> */}

            <Form style={styles.form}>
              {/* <Item >
                <Label>Sign Up</Label>
              </Item> */}
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, marginTop: 10, paddingLeft: 10 }}>{this.state.myName}</Text>
                <Button transparent onPress={() => this.generate()} >
                  {/* style={{ alignSelf: 'center' }} */}
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
              <Item floatingLabel >
                <Label></Label>
                <Input onChangeText={(value) => this.setState({ picture: value })} />
              </Item>
              {/* <Item floatingLabel last>
                <Label>Confirm Password</Label>
                <Input />
              </Item> */}


            </Form >
            <View style={{ backgroundColor: '#F5FCFF' }}>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>Your Gender</Text>
              <RadioForm
                style={{ alignSelf: 'center', marginTop: 15 }}
                radio_props={gender}
                initial={2}
                formHorizontal={true}
                onPress={(value) => this.setState({ gender: value })}
              />

              <Button onPress={() => this.checkRegister()} info style={styles.button}><Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }} >CREATE ACCOUNT</Text></Button>

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
    marginTop: 35
  },
  redTex: {
    color: 'red'
  },
  button: {
    // backgroundColor: 'white',
    alignSelf: 'center',
    width: 200,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',

  },
  form: {
    backgroundColor: 'white',
    // textAlign: 'center',
    alignSelf: 'center',
    // position:'absolute',
    elevation: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    // zIndex: 99,
    width: 330,
    minHeight: 250,
  },
  container: {
    flex: 2,
  }
};
