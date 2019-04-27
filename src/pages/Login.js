import React, { Component } from 'react';
import { View, AsyncStorage, Navigation, Image, KeyboardAvoidingView } from 'react-native';
import { Container, Text, Header, Left, Right, Icon, Button, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';


export default class Login extends Component {


    state = {
        username: '',
        password: '',
        token: '',
        auth: 'hi'
    }


    checkLogin = () => {
        console.log('checking...');
        const self = this;
        // console.log(`VOID ENTERED \n User: ${this.state.username} \n PW: ${this.state.password} \n Remeber to comment this log out`)
        axios.post('https://icebreakr-serv.herokuapp.com/api/user/login', {
        
            email: this.state.username,
            password: this.state.password,
        })
            .then(function (response) {
                console.log('-------- /n Axios did its thing. Not this:');
                // console.log(response.data.token);
                // let tok = response.data.token;
                // self.props.handlesomthing(response.data.token);

                self._storeData(response.data.token);

                // try {
                //     await AsyncStorage.setItem('token', response.data.token);
                //   } catch (error) {
                //     // Error saving data
                //   }
            })
            .catch(function (error) {
                console.log(error);
            });



    }

    _storeData = (e) => {

        AsyncStorage.setItem('token', e);
        this._retrieveData();
        Actions.dashboard();
    };
    _retrieveData = async () => {
        try {

            const value = await AsyncStorage.getItem('token');

            // if (value !== null) {
            //     // We have data!!
            console.log(value);
            // }

        } catch (error) {
            // Error retrieving data
        }
    };

    componentDidMount() {
        this.loadInitialState().done();
        axios.get('https://icebreakr-serv.herokuapp.com/api/user')
        .then(function (response) {
           console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


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

            <LinearGradient
                colors={['#42AAD8', '#A8D7F7']}
                style={styles.container}>


                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <Image source={require('../images/icebreakr-logo-icon.png')} style={{ alignSelf: 'center' }} />

                    <View style={{marginTop: 20}}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 40 }}>Log In</Text>
                    </View>
                </View>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <View style={{
                        // backgroundColor: '#F5FCFF',
                        alignItems: 'center',
                        width: '100%',
                        // minHeight: 290,
                        // bottom: 0,
                        flex: 1

                    }}>

                        <Form style={styles.form}>
                            <Item floatingLabel >
                                <Label>Email</Label>
                                <Input onChangeText={(value) => this.setState({ username: value })} />
                            </Item>
                            <Item floatingLabel last >
                                <Label>Password</Label>
                                <Input secureTextEntry={true} onChangeText={(value) => this.setState({ password: value })} />
                            </Item>
                        </Form>
                        <View style={{ justifyContent: 'center', minHeight: 250, backgroundColor: 'white', width: '100%', position: 'absolute', bottom: 0, paddingBottom: 15 }}>
                            <Button info style={styles.button} onPress={this.checkLogin}><Text style={{ color: 'white', textAlign: 'center', width: 150, alignSelf: 'center' }} >Sign in user</Text></Button>
                            <Text style={{ alignSelf: 'center' }} onPress={() => Actions.signup()}>DON'T HAVE AN ACCOUNT? Signup!</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </LinearGradient>
        );
    }

}


const styles = {

    button: {
        // backgroundColor: 'white',
        alignSelf: 'center',
        // alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 25,
        borderRadius: 10,
        width: "80%",
        height: 55
    },
    form: {
        backgroundColor: 'white',
        alignSelf: 'center',
        elevation: 3,
        alignItems: 'center',
        width: '90%',
        marginTop: 10,
        marginBotom: -20, 
        minHeight: 150
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
};
