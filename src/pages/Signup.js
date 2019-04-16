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

          <View>
            <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>SIGN UP</Text>
            <Image source={require('../images/AddImage.png')} style={{ alignSelf: 'center' }} />

            <Text style={{ color: 'white', textAlign: 'center', marginTop: 10, marginBottom: 30 }}>Randomly selected Meme icon</Text>
            {/* <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Randomly selected Name</Text> */}

            <Form style={styles.form}>
              <Item >
                <Label>Randomly selected Name</Label>
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Confirm Password</Label>
                <Input />
              </Item>


            </Form >
            <View style={{ backgroundColor: '#F5FCFF', marginTop: -55 }}>
              <Text style={{ textAlign: 'center', marginTop: 70, marginBottom: 25 }}>Your Gender</Text>
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
    marginTop: 35
  },
  redTex: {
    color: 'red'
  },
  button: {
    // backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 20,
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
    width: 330,
    minHeight: 280,
  },
  container: {
    flex: 1,
  }
};

