import React, { Component } from 'react';
import { View, Image, AppRegistry, TouchableHighlight, AsyncStorage, Alert } from 'react-native';
import DashHeaderCard from '../components/DashHeaderCard';
import { Container, Header, Button, Content, Card, Text, Body, Form, Item, Label, Input, CardItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from "react-native-easy-grid";
import decode from 'jwt-decode';
import InboxPrivateMessage from '../components/InboxPrivateMessage';
// import { getTopFrame } from 'jest-message-util';

// import { Actions } from 'react-native-router-flux';



export default class Dashboard extends Component {
    state = {
        userInfo: {

        },
        eventName: '',
    }
    componentDidMount = () => {
        console.log('sup');
        this._retrieveData();
    }

    _handleLogOut = () => {
        console.log('hello world');
        AsyncStorage.removeItem('token');
        Alert.alert('Icebreakr', 'You have been logged out.');
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
                    userInfo: {
                        email: decoded.email,
                        id: decoded.id,
                        picture: decoded.picture,
                        name: decoded.name
                    }
                });
                console.log(this.state.userInfo);

            } else {
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

                        {/* <Header /> */}

                        <View>

                            <Image source={require('../images/icebreakr-logo-icon.png')} style={{ alignSelf: 'center' }} />
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: 30, marginBottom: 30 }}>What do you want to do?</Text>
                            {/* <Card> */}
                            {/* <CardItem header>

                                </CardItem>
                                <Text style={{ color: 'black', textAlign: 'center', marginTop: 0, marginBottom: 0 }}>Private Messages</Text>
                                <Body>
                                    <ScrollView>
                                        <InboxPrivateMessage />
                                    </ScrollView>

                                </Body> */}
                            {/* </CardItem> */}

                            {/* </Card> */}

                            <Card>
                                <CardItem header>


                                </CardItem>
                                {/* <CardItem> */}
                                <Body>
                                    <Image source={require('../images/group-icon.png')} style={{ alignSelf: 'center' }} />
                                    <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                                        Chat with a bunch of people located in your immediate area.
                                        </Text>
                                    {/* <Grid style={{ textAlign: 'center', marginTop: 10, marginBottom: 0 }}>
                                        <Col><Text style={{ textAlign: 'center' }}>People around</Text></Col>
                                        <Text>|</Text>
                                        <Col><Text style={{ textAlign: 'center' }}>Already chatted with</Text></Col>
                                    </Grid> */}

                                    {/* <Grid style={{ textAlign: 'center', marginTop: 10, marginBottom: 30 }}>
                                        <Col><Text style={{ textAlign: 'center' }}>36</Text></Col>

                                        <Col><Text style={{ textAlign: 'center' }}>7</Text></Col>
                                    </Grid> */}
                                </Body>
                                <Button style={styles.button} warning><Text style={{ textAlign: 'center', width: 300 }} onPress={() => Actions.groupChat()}> JOIN GROUP CHAT </Text></Button>

                            </Card>

                            <Card>
                                <CardItem header>

                                </CardItem>
                                {/* <CardItem> */}
                                <Body>
                                    <Image source={require('../images/calendar-icon.png')} style={{ alignSelf: 'center' }} />
                                    <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 30 }}>
                                        Find new people to talk to. Create a new event to have people meet in your group or join an existing event
                                        </Text>
                                    <Button info style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 300 }} onPress={() => Actions.eventSetup()}>CREATE EVENT</Text></Button>



                                </Body>

                                <CardItem bordered style={{ borderTopWidth: 1, borderTopColor: '#E3E9EC', marginTop: -15 }}>
                                    <Body>
                                        {/* <Content>
                                            <Form style={styles.form}>
                                                <Item regular>
                                                    <Label style={{ textAlign: 'center', width: '100%' }}>Event Name</Label>
                                                    <Input />
                                                </Item>
                                            </Form>
                                        </Content> */}
                                        {/* <Content> */}
                                            <Form style={{width: '100%'}}>
                                               
                                                <Item regular stackedLabel>
                                                <Label style={{ fontSize: 15, textAlign: 'center', width: '100%'}}>Event Name</Label>

                                                    <Input style={{ textAlign: 'center', width: '100%'}} onChangeText={(value) => this.setState({ eventName: value })} />
                                                </Item>
                                            </Form>
                                        {/* </Content> */}


                                       

                                        <Button warning style={styles.button2}><Text style={{ color: 'white', textAlign: 'center', width: 300 }} onPress={() => Actions.eventChat()}>JOIN EVENT</Text></Button>

                                    </Body>
                                </CardItem>

                                {/* </CardItem> */}

                            </Card>



                            <TouchableHighlight onPress={this._handleLogOut}>
                                {/* <Text style={[styles.button, styles.greyButton]}>
                                    Log Out
                                </Text> */}

                                <Button bordered light style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 200 }} onPress={() => this._handleLogOut()}>LOG OUT</Text></Button>


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

    button2: {
        // backgroundColor: 'orange',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 25,
        borderRadius: 10
    },

    greyButton: {
        backgroundColor: '#777',
        color: '#fff'
    },

    form: {
        color: '#fff',
        width: '100%'
    }
};


