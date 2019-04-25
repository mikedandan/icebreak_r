import React, { Component } from 'react';
import { View, AsyncStorage, Navigation, Image } from 'react-native';
import { Container, Text, Header, Left, Right, Icon, Button, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';


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
            password: this.state.password,
        })
            .then(function (response) {
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

            <LinearGradient
                colors={['#42AAD8', '#A8D7F7']}
                style={styles.container}>


                <Image source={require('../images/icebreakr-logo-icon.png')} style={{ position: 'absolute', top: 15, alignSelf: 'center' }} />
                <View style={{ height: '100%', justifyContent: 'center', }} >

                    <View style={{ marginBottom: 90 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 40 }}>Log In</Text>
                    </View>
                    <View style={{ marginBottom: 0 }}>
                        <Form style={styles.form}>
                            <Item floatingLabel >
                                <Label>Email</Label>
                                <Input onChangeText={(value) => this.setState({ username: value })} />
                            </Item>
                        </Form>
                        <Form style={styles.form}>
                            <Item floatingLabel last >
                                <Label>Password</Label>
                                <Input onChangeText={(value) => this.setState({ password: value })} />
                            </Item>


                        </Form>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#F5FCFF',
                    alignItems: 'center',
                    width: '100%',
                    minHeight: 290,
                    position: 'absolute',
                    bottom: 0,
                    justifyContent: 'flex-end',

                }}>
                    <Button info style={styles.button} onPress={this.checkLogin}><Text style={{ color: 'white', textAlign: 'center', width: 150, alignSelf: 'center' }} >Sign in user</Text></Button>
                    <Text>FORGOT PASSWORD? GET NEW!</Text>
                    <Text style={{ marginBottom: 30 }} onPress={() => Actions.signup()}>DON'T HAVE AN ACCOUNT? Signup!</Text>
                </View>

            </LinearGradient>
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
        // alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 25,
        borderRadius: 10,
        width: "80%",
        height: 50
    },
    form: {
        backgroundColor: 'white',
        // textAlign: 'center',
        alignSelf: 'center',
        // position:'absolute',
        elevation: 3,
        // justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
        width: 330,
        // minHeight: 280,
        marginTop: 10
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
};
