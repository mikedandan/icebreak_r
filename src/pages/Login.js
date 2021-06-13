import React, { Component } from 'react'
import { Image, KeyboardAvoidingView, View } from 'react-native'
import { Button, Form, Input, Item, Label, Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    token: '',
    auth: 'hi',
  }

  checkLogin = () => {
    console.log('checking...')
    const self = this
    // console.log(`VOID ENTERED \n User: ${this.state.username} \n PW: ${this.state.password} \n Remeber to comment this log out`)
    axios
      .post('https://icebreakr-serv.herokuapp.com/api/user/login', {
        email: this.state.username,
        password: this.state.password,
      })
      .then(function (response) {
        console.log('-------- /n Axios did its thing. Not this:')
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
        console.log(error)
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

  componentDidMount() {
    this.loadInitialState().done()
    axios
      .get('https://icebreakr-serv.herokuapp.com/api/user')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

    // jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjkzYTQ2Yjk5MDBlMDAxNzdlZGQ3ZCIsImlhdCI6MTU1NTcwMTg4OCwiZXhwIjoxNTg3MjU4ODE0fQ.d89O3fZoE87E5gW5V9V_6JbxNGIFEsYm3NbLH5tXqqY", 'secret', function(err, decoded) {
    //     console.log(decoded.foo) // bar
    //   });
    // var decoded = decode("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmEzMGU3ZjZmZmU1MTBhMDU4MmQyMSIsIm5hbWUiOiJqcGl6emxleGN2eGN2IiwiaWF0IjoxNTU1NzA2Mjg1LCJleHAiOjE1ODcyNjMyMTF9.PP8lY49PA83XQpMSJDCfIokjcoHXXlJw4R216YSOxPU");
    // console.log(decoded);
  }

  loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user')
    if (value !== null) {
      this.props.Actions.main()
    }
  }
  render() {
    return (
      <LinearGradient colors={['#42AAD8', '#A8D7F7']} style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image
            source={require('../images/icebreakr-logo-icon.png')}
            style={{ alignSelf: 'center' }}
          />

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontFamily: 'Roboto Bold',
                color: 'white',
                textAlign: 'center',
                fontSize: 40,
              }}>
              Log In
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <View style={{ marginBottom: -30 }}>
              <Form style={styles.form}>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    onChangeText={(value) => this.setState({ username: value })}
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
            </View>
            <View style={{ width: '100%' }}>
              <View
                style={{
                  width: '100%',
                  minHeight: 210,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                }}>
                <Button info style={styles.button} onPress={this.checkLogin}>
                  <Text
                    style={{
                      fontFamily: 'Roboto Regular',
                      fontSize: 20,
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Sign in user
                  </Text>
                </Button>
                <Text
                  style={{
                    fontFamily: 'Roboto Regular',
                    textAlign: 'center',
                    marginTop: 15,
                  }}
                  onPress={() => Actions.signup()}>
                  DON'T HAVE AN ACCOUNT? Signup!
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

const styles = {
  button: {
    alignSelf: 'center',
    width: 250,
    height: 55,
    borderRadius: 15,
    marginTop: 15,
    justifyContent: 'space-around',
  },
  form: {
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 3,
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    minHeight: 150,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
}
