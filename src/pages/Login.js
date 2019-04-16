import React, { Component } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Navigation } from 'react-native';
import { Container, Text, Header, Left, Right, Icon, Button, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import { Actions } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';


export default class Signup extends Component {

    constructor(props) {
        super(props)
        state = {
            username: '',
            password: '',
        }
    }

    checkLogin = () => {
        console.log("VOID ENTERED")
        axios.post('localhost:3000/api/users/login', {
                email: this.state.username,
                password: this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        // this.loadInitialState().done();

       

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

