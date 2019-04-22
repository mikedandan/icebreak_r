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
import image1 from '../images/avatars/RandomAnimals_brown_bear.png';
import image2 from '../images/avatars/RandomAnimals_dog.png';
import image3 from '../images/avatars/RandomAnimals_dolphin.png';
import image4 from '../images/avatars/RandomAnimals_elephant.png';
import image5 from '../images/avatars/RandomAnimals_fox.png';
import image6 from '../images/avatars/RandomAnimals_gariffe.png';
import image7 from '../images/avatars/RandomAnimals_hedgehog.png';

// const picArr = ["../images/avatars/RandomAnimals_brown_bear.png"]
const picArr = [image1, image2, image3, image4, image5, image6, image7];

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
    const ran = Math.floor(Math.random() * picArr.length)
    // const randomPic = picArr[ran]
    console.log("nani the fuck:" + picArr[ran])

    this.generate();
    this.setState({ picture: ran }, () => console.log("we here bois" + this.state.picture))

    console.log("the random number is" + ran)
  }
  generate = () => {

    let nickname = generateName();
    this.setState({ myName: nickname })
  };

  checkRegister = () => {


    // console.log(this.state)
    console.log(`VOID ENTERED \n email: ${this.state.email} \n password: ${this.state.password} \n picture: ${this.state.picture} \n Remeber to comment this log out`)
    axios.post('https://icebreakr-serv.herokuapp.com/api/user/register', {
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
    // console.log(this.state.picture)
    return (


      <LinearGradient
        colors={['#42AAD8', '#A8D7F7']}
        style={styles.container}>
        <Text style={{ color: 'white' }} onPress={() => Actions.main()}>go to Main</Text>

        <Text style={{ color: 'white', textAlign: 'center', marginBottom: 20 }}>SIGN UP</Text>
        <View style={{ alignSelf: 'center' }}>
          <Image source={this.state.picture} />
        </View>

        <Form style={styles.form}>
          <View>
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
          {/* <Item floatingLabel >
                        <Label></Label>
                        <Input onChangeText={(value) => this.setState({ picture: value })} />
                    </Item> */}
        </Form >

        <View style={styles.genderArea}>
          <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>Your Gender</Text>
          <RadioForm
            style={{ alignSelf: 'center', marginTop: 15 }}
            radio_props={gender}
            initial={2}
            formHorizontal={true}
            onPress={(value) => this.setState({ gender: value })}
          />
          <Button onPress={() => this.checkRegister()} info style={styles.button}><Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }} >CREATE ACCOUNT</Text></Button>
        </View>

      </LinearGradient>

    );
  }
}


const styles = {
  thisIsAStyle: {
    fontSize: 50,
    marginTop: 35
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
    alignSelf: 'center',
    elevation: 3,
    width: 330,
    minHeight: 250,
  },
  genderArea: {
    backgroundColor: '#F5FCFF'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
};
