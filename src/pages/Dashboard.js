import React, { Component } from 'react';
import { View, Image, AppRegistry } from 'react-native';
import DashHeaderCard from '../components/DashHeaderCard';
import { Container, Header, Button, Content, Card, CardItem, Text, Body } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from "react-native-easy-grid";

// import { Actions } from 'react-native-router-flux';

export default class Dashboard extends Component {


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
                                    <View style={{
                                        flex: 1,
                                        // flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'stretch',
                                    }}>
                                        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                                        <View style={{ height: 50, backgroundColor: 'skyblue' }} />
                                        <View style={{ height: 100, backgroundColor: 'steelblue' }} />
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

};

