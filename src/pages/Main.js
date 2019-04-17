import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Nav from '../components/Nav';
import { Container, Header, Content, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class Main extends Component {

    render() {

        return (
            <LinearGradient
                colors={['#42AAD8', '#A8D7F7']}
                style={styles.container}>
                <View style={{
                    height: "100%",
                    // backgroundColor: "linear-gradient(to right, rgb(107, 205, 235) ,rgb(3, 110, 180))",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        // height: 150,
                        // width: 150,
                        // backgroundColor: 'red',
                        alignItems: 'center'
                    }}><Image source={require('../images/icebreakr-logo-300.png')} style={{
                        borderRadius: 18
                    }} /></View>
                    <Text style={styles.thisIsAStyle}> Sign up and start chatting</Text>

                    {/* <Button 
                title="click me!"
                color="black"
                style={styles.button} /> */}
                
                    <Button style={styles.button}><Text style={{ color: 'black' }} onPress={() => Actions.signup()}>Sign up with email</Text></Button>
                    <Button style={styles.button}><Text style={{ color: 'black' }} onPress={() => Actions.eventSetup()}>Create Event</Text></Button>
                    <Text style={{ color: 'white' }} onPress={() => Actions.login()}>or Login</Text>
                    <Text style={styles.redTex} onPress={() => Actions.dashboard()}>go dashboard page </Text>
                </View>
                
            </LinearGradient>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 25
    },
    button: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginBottom: 25,
        borderRadius: 10

    },
    container: {
        flex: 1,
    }
};

