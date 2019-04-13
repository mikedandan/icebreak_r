import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Header, Left, Right, Icon, Button, Radio, ListItem, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
export default class Signup extends Component {

  render() {

    return (
      <ScrollView >

        <LinearGradient
          colors={['#42AAD8', '#A8D7F7']}
          style={styles.container}>




          <View style={{ zIndex: 97 }}>
            <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
            <Text style={{ textAlign: 'center', marginBottom: 25 }}>EVENT SETUP</Text>
            <Image source={require('../images/AddImage.png')} style={{ alignSelf: 'center' }} />

            {/* <Text style={{ color: 'white', textAlign: 'center', marginTop: 15, marginBottom: 35 }}>Randomly selected Meme icon</Text> */}
            {/* <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Randomly selected Name</Text> */}

            <Form style={styles.form}>
              <Item >
                <Label>Event Setup</Label>
              </Item>
              <Item floatingLabel>
                <Label>Event Name</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Event Location</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Event Time</Label>
                <Input />
              </Item>
            </Form >

            {/* <View style={{ backgroundColor: '#F5FCFF', zIndex: 98 }}> */}
            <View style={{ backgroundColor: '#F5FCFF', zIndex: 98 }}>
              <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Your Event Details</Text>
              <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Your event chat will be specific to your event. Only people with your event QR code or ID will be able to join yor event</Text>
              {/* <Grid>
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
              </Grid> */}

              <Button info style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 150 }} onPress={() => Actions.main()}>SETUP EVENT</Text></Button>

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

