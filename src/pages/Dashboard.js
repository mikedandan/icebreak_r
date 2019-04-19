import React, { Component } from 'react';
import { View, Image } from 'react-native';
import DashHeaderCard from '../components/DashHeaderCard';
import { Container, Header, Button, Content, Card, CardItem, Text, Body } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

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
                                    <Text>
                                    //Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </Text>
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
                                    

                                </Body>
                                <Button style={styles.button}warning><Text style={{textAlign: 'center', width: 300}} onPress={() => Actions.signup()}> JOIN GROUP CHAT </Text></Button>

                            </Card>

                            <Card>
                                <CardItem header>

                                </CardItem>
                                {/* <CardItem> */}
                                <Body>
                                    <Image source={require('../images/calendar-icon.png')} style={{ alignSelf: 'center' }} />
                                    <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                                        Set up an event in your area. A social meetup or hangout with people.
                                        </Text>
                                        <Button info style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 150 }} onPress={() => Actions.signup()}>SET UP EVENT</Text></Button>


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
    }
    };

