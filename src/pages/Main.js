import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Nav from '../components/Nav';
import { Container, Header, Content, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Main extends Component {

    render() {

        return (
            <Container style={{
                height: "100%",
                backgroundColor: "linear-gradient(to right, rgb(107, 205, 235) ,rgb(3, 110, 180))",
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    // height: 150,
                    // width: 150,
                    // backgroundColor: 'red',
                    alignItems: 'center'
                }}><Image source= {require('../images/icebreakr-logo-300.png')} /></View>
                <Text style={styles.thisIsAStyle}> Sign up and start chatting</Text>

                {/* <Button 
                title="click me!"
                color="black"
                style={styles.button} /> */}
                <Button style={styles.button}><Text style={{color: 'black'}} onPress={() => Actions.signup()}>Sign up with email</Text></Button>

                <Text style={{color: 'white'}} onPress={() => Actions.page2()}>or Login</Text>

            </Container>
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
        marginBottom: 25
        
    },
};

