import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Header, Left, Right, Icon, Button, Radio, ListItem, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import SocketIOClient from 'socket.io-client';


export default class GroupChat extends Component {

  constructor(props){
    super(props);
    this.socket = SocketIOClient('http://192.168.1.123:3000');
    this.socket.on('group chat', function(msg){
      console.log(msg);
    })
    console.log("is this running");
    this.socket.emit('group chat', 'Testing a message from emit')
  }

  render() {

    return (
      <ScrollView >

        <LinearGradient
          colors={['#42AAD8', '#A8D7F7']}
          style={styles.container}>




          <View style={{ zIndex: 97 }}>
            <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
            <Text style={{ textAlign: 'center', marginBottom: 25 }}>SIGN UP</Text>
            <Image source={require('../images/AddImage.png')} style={{ alignSelf: 'center' }} />

            <Text style={{ color: 'white', textAlign: 'center', marginTop: 15, marginBottom: 35 }}>Randomly selected Meme icon</Text>
            {/* <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Randomly selected Name</Text> */}

            <Form style={styles.form}>
             
           
              <Item floatingLabel last>
                <Label>Type something</Label>
                <Input />
              </Item>


            </Form >
            <View style={{ backgroundColor: '#F5FCFF', zIndex: 98 }}>
              <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 30 }}>Your Gender</Text>
              <Grid>
                <Col>
                  <ListItem>
                    <Left>
                      <Text>Man</Text>
                    </Left>
                    <Right>
                      <Radio selected={false} />
                    </Right>
                  </ListItem>
                </Col>
                <Col>
                  <ListItem>
                    <Left>
                      <Text>Women</Text>
                    </Left>
                    <Right>
                      <Radio selected={false} />
                    </Right>
                  </ListItem>
                </Col>
                <Col>
                  <ListItem>
                    <Left>
                      <Text>Prefer not to say</Text>
                    </Left>
                    <Right>
                      <Radio selected={false} />
                    </Right>
                  </ListItem>
                </Col>
              </Grid>

              <Button info style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 150 }} onPress={() => Actions.signup()}>CREATE ACCOUNT</Text></Button>

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

