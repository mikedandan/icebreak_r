import React, { Component } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Navigation } from 'react-native';
import { Container, Text, Header, Left, Right, Icon, Button, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import { Actions } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
// import jwt from 'jsonwebtoken';

export default class Signup extends Component {

    constructor(props) {
        super(props)
        state = {
            username: '',
            password: '',
            token: '',
            auth: 'hi'
        }
    }

    checkLogin = () => {
        const self = this;
        // console.log(`VOID ENTERED \n User: ${this.state.username} \n PW: ${this.state.password} \n Remeber to comment this log out`)
        axios.post('https://icebreakr-serv.herokuapp.com/api/user/login', {
            email: this.state.username,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response.data.token);
                // let tok = response.data.token;
                self.props.handlesomthing(response.data.token);
          
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    componentDidMount() {
        // this.loadInitialState().done();
        // axios.get('https://icebreakr-serv.herokuapp.com/api/user')
        // .then(function (response) {
        //    console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });


        // jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjkzYTQ2Yjk5MDBlMDAxNzdlZGQ3ZCIsImlhdCI6MTU1NTcwMTg4OCwiZXhwIjoxNTg3MjU4ODE0fQ.d89O3fZoE87E5gW5V9V_6JbxNGIFEsYm3NbLH5tXqqY", 'secret', function(err, decoded) {
        //     console.log(decoded.foo) // bar
        //   });
        // var decoded = decode("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmEzMGU3ZjZmZmU1MTBhMDU4MmQyMSIsIm5hbWUiOiJqcGl6emxleGN2eGN2IiwiaWF0IjoxNTU1NzA2Mjg1LCJleHAiOjE1ODcyNjMyMTF9.PP8lY49PA83XQpMSJDCfIokjcoHXXlJw4R216YSOxPU");
        // console.log(decoded);
    }

    loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.Actions.main();
        }
    }

    render() {

        return (
            <View>

                {/* <Text style={styles.thisIsAStyle}> this is the signup page</Text> */}
                <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>

                <Form>
                    <Item floatingLabel >
                        <Label>Username</Label>
                        <Input onChangeText={(value) => this.setState({ username: value })} />
                    </Item>
                    <Item floatingLabel last >
                        <Label>Password</Label>
                        <Input onChangeText={(value) => this.setState({ password: value })} />
                    </Item>
                    <Button style={styles.button} onPress={this.checkLogin}><Text style={{ color: 'white', textAlign: 'center', width: 150 }} >Sign in user</Text></Button>

                </Form>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>FORGOT PASSWORD? GET NEW!</Text>
                    <Text onPress={() => Actions.signup()}>DON'T HAVE AN ACCOUNT? Signup!</Text>
                </View>
            </View >
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
        marginBottom: 25

    },
};


