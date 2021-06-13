import React, { Component } from 'react'
import { Image, KeyboardAvoidingView, Text, View } from 'react-native'
import { Button, Form, Icon, Input, Item, Label } from 'native-base'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'
import generateName from 'sillyname'
import RadioForm from 'react-native-simple-radio-button'
import AsyncStorage from '@react-native-async-storage/async-storage'

const gender = [
  { label: 'Male ', value: 0 },
  { label: 'Female ', value: 1 },
  { label: 'Prefer not to say', value: 2 },
]

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
  'https://icebreakr-serv.herokuapp.com/images/RandomAnimals_zebra.png',
]

export default class Signup extends Component {
  //test
  state = {
    myName: '',
    email: '',
    password: '',
    picture: '',
    gender: [],
  }

  componentWillMount = () => {
    this.generate()
    this.getAvatar()
  }

  getAvatar = () => {
    const uri = Math.floor(Math.random() * picArr.length)
    this.setState({ picture: picArr[uri], ran: uri })
    console.log('testing' + this.state.picture)
    console.log('the random number is' + picArr[uri])
  }

  generate = () => {
    let nickname = generateName()
    this.setState({ myName: nickname })
  }

  checkRegister = () => {
    const self = this
    console.log(
      `VOID ENTERED \n email: ${this.state.email} \n password: ${this.state.password} \n picture: ${this.state.picture} \n Remeber to comment this log out`,
    )
    axios
      .post('https://icebreakr-serv.herokuapp.com/api/user/register', {
        displayName: this.state.myName,
        email: this.state.email,
        password: this.state.password,
        picture: this.state.picture,
        gender: this.state.gender,
      })
      .then(function (response) {
        console.log(response)
        self.checkLogin()
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  ////////////////////////////////////////////////////////////////////////////
  checkLogin = () => {
    const self = this
    // console.log(`VOID ENTERED \n User: ${this.state.username} \n PW: ${this.state.password} \n Remeber to comment this log out`)
    axios
      .post('https://icebreakr-serv.herokuapp.com/api/user/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        // console.log(response.data.token);
        // let tok = response.data.token;
        // self.props.handlesomthing(response.data.token);

        self._storeData(response.data.token)

        // try {
        //     await AsyncStorage.setItem('token', response.data.token);
        //   } catch (error) {
        //     // Error saving data
        //   }
      })
      .catch(function (error) {
        console.log(error.response)
      })
  }

  _storeData = (e) => {
    AsyncStorage.setItem('token', e)
    this._retrieveData()
    Actions.dashboard()
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')

      // if (value !== null) {
      //     // We have data!!
      console.log(value)
      // }
    } catch (error) {
      // Error retrieving data
    }
  }
  ////////////////////////////////////////////////////////////////////
  render() {
    // const { errors } = this.state;
    return (
      <LinearGradient colors={['#42AAD8', '#A8D7F7']} style={styles.container}>
        <View style={styles.random}>
          <Text
            style={{
              fontFamily: 'Roboto Bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 20,
            }}>
            SIGN UP
          </Text>
          <Image
            source={{ uri: this.state.picture }}
            style={{ width: 100, height: 100 }}
          />
        </View>

        <KeyboardAvoidingView style={styles.genderArea}>
          <Form style={styles.form}>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  fontFamily: 'Roboto Bold',
                  fontSize: 20,
                  marginTop: 10,
                  paddingLeft: 10,
                }}>
                {this.state.myName}
              </Text>
              <Button transparent onPress={() => this.generate()}>
                <Icon style={{ fontSize: 20 }} name="sync" />
              </Button>
            </View>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                onChangeText={(value) => this.setState({ email: value })}
              />
            </Item>

            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={(value) => this.setState({ password: value })}
              />
            </Item>
          </Form>

          <View
            style={{
              backgroundColor: '#F5FCFF',
              flex: 1,
              justifyContent: 'space-around',
            }}>
            <View
              style={{ alignSelf: 'center', position: 'absolute', bottom: 10 }}>
              <Text
                style={{
                  fontFamily: 'Roboto Bold',
                  fontSize: 25,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Your Gender
              </Text>
              <RadioForm
                style={{
                  fontFamily: 'Roboto Regular',
                  alignSelf: 'center',
                  marginTop: 15,
                }}
                radio_props={gender}
                initial={2}
                buttonColor={'#abacad'}
                selectedButtonColor={'#FF9857'}
                formHorizontal={true}
                onPress={(value) => this.setState({ gender: value })}
              />

              <Button
                onPress={() => this.checkRegister()}
                info
                style={styles.button}>
                <Text
                  style={{
                    fontFamily: 'Roboto Regular',
                    fontSize: 20,
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  CREATE ACCOUNT
                </Text>
              </Button>
              <Text
                style={{
                  fontFamily: 'Roboto Regular',
                  marginBottom: 10,
                  textAlign: 'center',
                  marginTop: 20,
                }}
                onPress={() => Actions.login()}>
                Already have an account? Login!
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

const styles = {
  // customFont: {
  //   fontFamily: 'Roboto Bold',
  //   fontSize: 25,
  //   textAlign: 'center',
  //   // fontWeight: 'black',
  //   // fontStyle: 'italic'
  //   // or fontFamily: 'Tittilium WebBold Italic'
  //  },
  random: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignSelf: 'center',
  },
  form: {
    fontFamily: 'Roboto Regular',
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
}
