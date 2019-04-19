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

const gender = [
  { label: "Male ", value: 0 },
  { label: "Female ", value: 1 },
  { label: "Prefer not to say", value: 2 },
];

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
    this.generate();
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

    return (
      <ScrollView >

        <LinearGradient
          colors={['#42AAD8', '#A8D7F7']}
          style={styles.container}>

          <View>
            <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>SIGN UP</Text>
            <Image source={require('../images/AddImage.png')} style={{ alignSelf: 'center' }} />

            <Text style={{ color: 'white', textAlign: 'center', marginTop: 10, marginBottom: 30 }}>{this.state.myName}</Text>
            <Button transparent onPress={() => this.generate()} style={{ alignSelf: 'center', marginTop: -20, marginBottom: 30 }}>
              <Icon style={{ fontSize: 20, color: 'white', }} name="sync" />

            </Button>
            {/* <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 15 }}>Randomly selected Name</Text> */}

            <Form style={styles.form}>
              <Item >
                <Label>Sign Up</Label>
              </Item>
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
            <View style={{ backgroundColor: '#F5FCFF', marginTop: -55 }}>

              <RadioForm
                style={{ alignSelf: 'center', marginTop: 70 }}
                radio_props={gender}
                initial={2}
                formHorizontal={true}
                onPress={(value) => this.setState({ gender: value })}
              />
              {/* <Text style={{ textAlign: 'center', marginTop: 70, marginBottom: 25 }}>Your Gender</Text>
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
              </Grid> */}

              <Button onPress={() => this.checkRegister()} info style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 150 }} >CREATE ACCOUNT</Text></Button>

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
