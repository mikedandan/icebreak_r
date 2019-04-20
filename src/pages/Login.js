import React, { Component } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Navigation, Image } from 'react-native';
import { Container, Header, Text, Left, Right, Icon, Button, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
// import { StackNavigator } from 'react-navigation';
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
        console.log(`VOID ENTERED \n User: ${this.state.username} \n PW: ${this.state.password} \n Remeber to comment this log out`)
        axios.post('https://icebreakr-serv.herokuapp.com/api/user/login', {
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

            <LinearGradient
                colors={['#42AAD8', '#A8D7F7']}
                style={styles.container}>


                {/* <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text> */}

                <Image source={require('../images/icebreakr-logo-icon.png')} style={{ position: 'absolute', top: 15, alignSelf: 'center' }} />

                <View style={{ height: '100%', justifyContent: 'center', }} >

                    <View style={{  marginBottom: 130 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 30 }}>LOGIN</Text>
                    </View>
                    <View style={{ marginBottom: -25 }}>
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
                    <Button info style={styles.button} onPress={this.checkLogin}><Text style={{ color: 'white', textAlign: 'center', width: 150 }} >Sign in user</Text></Button>
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
        marginTop: 10,
        marginBottom: 25,
        borderRadius: 10
    },
    form: {
        backgroundColor: 'white',
        textAlign: 'center',
        alignSelf: 'center',
        // position:'absolute',
        elevation: 2,
        // justifyContent: 'center',
        alignItems: 'center',
        width: 330,
        // minHeight: 280,
        marginTop: 10
    },
    container: {
        flex: 1,
    }
};

