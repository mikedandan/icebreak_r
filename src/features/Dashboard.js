import React, { Component } from 'react'
import { Alert, Image, TouchableHighlight, View } from 'react-native'
import {
  Body,
  Button,
  Card,
  CardItem,
  Form,
  Input,
  Item,
  Label,
  Text,
} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import decode from 'jwt-decode'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Dashboard extends Component {
  state = {
    userInfo: {},
    eventName: '',
    errorCode: '',
  }
  componentDidMount = () => {
    console.log('sup')
    this._retrieveData()
  }
  joinEvent = () => {
    const self = this
    console.log('y:' + this.state.eventName)

    Axios.post(
      'https://icebreakr-serv.herokuapp.com/api/message/eventHistory',
      { namespace: this.state.eventName },
    )
      .then(function (res) {
        //console.log(res);
        console.log('i have eneterd here')
        AsyncStorage.setItem('eventID', self.state.eventName)
        Actions.eventChat()
      })
      .catch((error) => {
        console.log(error)
        console.log("Sam doesn't like emojis")
        this.setState({ errorCode: 'No Event Found' })
      })
  }

  _handleLogOut = () => {
    console.log('hello world')
    AsyncStorage.removeItem('token')
    Alert.alert('Icebreakr', 'You have been logged out.')
    Actions.main()
  }

  _retrieveData = async () => {
    console.log('hello')
    try {
      const token = await AsyncStorage.getItem('token')

      if (token !== null) {
        // We have data!!
        console.log('user saved locally')
        console.log(token)
        var decoded = decode(token)

        this.setState({
          userInfo: {
            email: decoded.email,
            id: decoded.id,
            picture: decoded.picture,
            name: decoded.name,
          },
        })
        console.log(this.state.userInfo)
      } else {
        console.log('no data')
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <LinearGradient
            colors={['#42AAD8', '#A8D7F7']}
            style={styles.container}>
            {/* <Header /> */}

            <View>
              <Image
                source={require('../images/icebreakr-logo-icon.png')}
                style={{ alignSelf: 'center' }}
              />
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginTop: 30,
                  marginBottom: 30,
                }}>
                What do you want to do?
              </Text>
              {/* <Card> */}
              {/* <CardItem header>

                                </CardItem>
                                <Text style={{ color: 'black', textAlign: 'center', marginTop: 0, marginBottom: 0 }}>Private Messages</Text>
                                <Body>
                                    <ScrollView>
                                        <InboxPrivateMessage />
                                    </ScrollView>

                                </Body> */}
              {/* </CardItem> */}

              {/* </Card> */}

              <Card>
                <CardItem header />
                {/* <CardItem> */}
                <Body>
                  <Image
                    source={require('../images/group-icon.png')}
                    style={{ alignSelf: 'center' }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    Chat with a bunch of people located in your immediate area.
                  </Text>
                </Body>
                <Button style={styles.button} warning>
                  <Text
                    style={{ textAlign: 'center', width: 300 }}
                    onPress={() => Actions.groupChat()}>
                    {' '}
                    JOIN GROUP CHAT{' '}
                  </Text>
                </Button>
              </Card>

              <Card>
                <CardItem header />
                {/* <CardItem> */}
                <Body>
                  <Image
                    source={require('../images/calendar-icon.png')}
                    style={{ alignSelf: 'center' }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 10,
                      marginBottom: 30,
                    }}>
                    Find new people to talk to. Create a new event to have
                    people meet in your group or join an existing event
                  </Text>
                  <Button info style={styles.button}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        width: 300,
                      }}
                      onPress={() => Actions.eventSetup()}>
                      CREATE EVENT
                    </Text>
                  </Button>
                </Body>

                <CardItem
                  bordered
                  style={{
                    borderTopWidth: 1,
                    borderTopColor: '#E3E9EC',
                    marginTop: -15,
                  }}>
                  <Body>
                    <Form style={{ width: '100%' }}>
                      <Item regular stackedLabel>
                        <View>
                          <Text
                            style={{
                              fontSize: 15,
                              textAlign: 'center',
                              width: '100%',
                              color: 'red',
                            }}>
                            {this.state.errorCode}
                          </Text>
                        </View>
                        <Label
                          style={{
                            fontSize: 15,
                            textAlign: 'center',
                            width: '100%',
                          }}>
                          Event ID
                        </Label>

                        <Input
                          style={{ textAlign: 'center', width: '100%' }}
                          onChangeText={(value) =>
                            this.setState(
                              { eventName: value },
                              console.log('r' + this.state.eventName),
                            )
                          }
                        />
                      </Item>
                    </Form>

                    <Button warning style={styles.button2}>
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          width: 300,
                        }}
                        state={this.state.eventName}
                        onPress={this.joinEvent.bind(this)}>
                        JOIN EVENT
                      </Text>
                    </Button>
                  </Body>
                </CardItem>

                {/* </CardItem> */}
              </Card>

              <TouchableHighlight onPress={this._handleLogOut}>
                <Button bordered light style={styles.button}>
                  <Text
                    style={{ color: 'white', textAlign: 'center', width: 200 }}
                    onPress={() => this._handleLogOut()}>
                    LOG OUT
                  </Text>
                </Button>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  thisIsAStyle: {
    fontSize: 20,
    height: 25,
  },
  button: {
    // backgroundColor: 'orange',
    alignSelf: 'center',
    marginBottom: 25,
    borderRadius: 10,
  },

  button2: {
    // backgroundColor: 'orange',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 25,
    borderRadius: 10,
  },

  greyButton: {
    backgroundColor: '#777',
    color: '#fff',
  },

  form: {
    color: '#fff',
    width: '100%',
  },
}
