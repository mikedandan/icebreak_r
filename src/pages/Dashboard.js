import React, { Component } from 'react';
import { View, Image, AppRegistry, TouchableHighlight, AsyncStorage } from 'react-native';
import DashHeaderCard from '../components/DashHeaderCard';
import { Container, Header, Button, Content, Card, CardItem, Text, Body } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from "react-native-easy-grid";
import decode from 'jwt-decode';
// import { getTopFrame } from 'jest-message-util';

// import { Actions } from 'react-native-router-flux';



export default class Dashboard extends Component {
    state = {
        userInfo : {

        }
    }
    componentDidMount = () =>{
        console.log('sup');
        this._retrieveData();
    }

    _handleLogOut = () => {
        console.log('hello world');
        AsyncStorage.removeItem('token');
        alert('You have been logged out.');
        Actions.main();
    }

    _retrieveData = async () => {
        console.log('hello');
        try {

            const token = await AsyncStorage.getItem('token');

            if (token !== null) {
                // We have data!!
                console.log('user saved locally');
                console.log(token);
                var decoded = decode(token);
            
                
        
                this.setState({ 
                    userInfo :{
                        email: decoded.email,
                        id: decoded.id,
                        picture: decoded.picture,
                        name: decoded.name
                    } 
                });
                console.log(this.state.userInfo);
                
            }else {

                console.log('no data');

            }

        } catch (error) {
            // Error retrieving data
        }
    };
    
    render() {
        return (
            <ScrollView >
                <View>
                    <LinearGradient
                        colors={['#42AAD8', '#A8D7F7']}
                        style={styles.container}>

                        <Header />

                        <View>
                            <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>
                            <Image source={require('../images/icebreakr-logo-icon.png')} style={{ alignSelf: 'center' }} />
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: 30, marginBottom: 30 }}>What do you want to do?</Text>
                            <Card>
                                <CardItem header>

                                </CardItem>
                                <Text style={{ color: 'black', textAlign: 'center', marginTop: 10, marginBottom: 10 }}>Private Message</Text>
                                <Body>
                                    {/* <View style={{
                                        flex: 1,
                                        // flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'stretch',
                                    }}>
                                        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                                        <View style={{ height: 50, backgroundColor: 'skyblue' }} />
                                        <View style={{ height: 100, backgroundColor: 'steelblue' }} /> */}
                                    </View>
                                    
                                </Body>
                                {/* </CardItem> */}

                            </Card>

                            <Card>
                                <CardItem header>


                                </CardItem>
                                {/* <CardItem> */}
                                <Body>
                                    <Image source={require('../images/group-icon.png')} style={{ alignSelf: 'center' }} />

                                    <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                                        Chat with a bunch of people. Answer questions and meet meme-able people like yourself
                                        </Text>
                                    <Grid style={{ textAlign: 'center', marginTop: 10, marginBottom: 30 }}>
                                        <Col><Text style={{ textAlign: 'center' }}>People around</Text></Col>
                                        <Text>|</Text>
                                        <Col><Text style={{ textAlign: 'center' }}>Already chatted with</Text></Col>
                                    </Grid>
                                </Body>
                                <Button style={styles.button} warning><Text style={{ textAlign: 'center', width: 300 }} onPress={() => Actions.signup()}> JOIN GROUP CHAT </Text></Button>

                            </Card>

                            <Card>
                                <CardItem header>

                                </CardItem>
                                {/* <CardItem> */}
                                <Body>
                                    <Image source={require('../images/calendar-icon.png')} style={{ alignSelf: 'center' }} />
                                    <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 30 }}>
                                        Set up an event in your area. A social meetup or hangout with people.
                                        </Text>
                                    <Button info style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 300 }} onPress={() => Actions.signup()}>SET UP EVENT</Text></Button>


                                </Body>
                                {/* </CardItem> */}

                            </Card>
                            <TouchableHighlight onPress={this._handleLogOut}>
                                <Text style={[styles.button, styles.greyButton]}>
                                    Log Out
                                </Text>
                            </TouchableHighlight>

                        </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 20,
        height: 25
    },
    button: {
        // backgroundColor: 'orange',
        alignSelf: 'center',
        marginBottom: 25,
        borderRadius: 10
    },
    greyButton: {
        backgroundColor: '#777',
        color: '#fff'
      }
};

