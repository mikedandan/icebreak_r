import React, { Component } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/BackButton';
import { ChatWindow, Message, ChatFooter } from '../components/ChatWindow';
import io from 'socket.io-client'


export default class GroupChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            long: 0,
            permission: false,
            messages: [],
            userInput: ""
        };
    }

    setPosition(pos) {
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);
        this.setState({
            lat: pos.coords.latitude,
            long: pos.coords.longitude
        });
    }

    setPermission(bool) {
        this.setState({ permission: bool });
    }

    setMessages(array) {
        this.setState({ messages: array });
    }

    setUserInput(value) {
        this.setState({ userInput: value });
    }

    setLocation(hasLocationPermission) {
        console.log("ENTERED VOID");
        console.log(hasLocationPermission);
        if (hasLocationPermission) {
            Geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    this.setPosition(position);
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }

    getChatHistory() {
        const self = this;
        console.log("VOID")
        axios.get('http://10.0.2.2:3000/api/message/')
            .then(function (response) {
                self.setMessages(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    async checkPermission() {
        await navigator.geolocation.getCurrentPosition(
            () => this.setPermission(true),
            () => this.setPermission(false)
        )
        return this.setPermission;
    }

    async componentDidMount() {
      

        let hasLocationPermission = this.checkPermission();
        console.log("Permission Status: " + hasLocationPermission);
        await this.setLocation(hasLocationPermission);
        await this.getChatHistory();
    }

    async postMessage(newMessage) {
        let messageArray = this.state.messages;
        await messageArray.push(newMessage);
        const self = this;
        axios.post('http://10.0.2.2:3000/api/message/new', newMessage)
            .then(function (response) {
                console.log(response);
                //after pushing to database, clear the input
                self.setUserInput("");
                self.setMessages(messageArray);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleMessageSent = async () => {
        console.log("WEEEWOO");
        const username = "Potato";
        const newMessage = {
            "nickName":username,
            "message": this.state.userInput,
            "picture":"test.png",
            "userID":"12345",
            "lon": this.state.long,
            "lat": this.state.lat,
            "namespace": "group",
            "date":Date.now()
        }
        //https://icebreakr-serv.herokuapp.com/
        let socket = io(`http://10.0.2.2:3000`, {
            query: {
                username
            }
        });
        await socket.emit('GroupMsgToServer', this.state.userInput);
        await this.postMessage(newMessage);
    }

    render() {

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <LinearGradient colors={['#42AAD8', '#A8D7F7']} style={{ flex: 1 }}>

                    {/* BackButton */}
                    <View style={styles.backButton}>
                        <BackButton />
                    </View>

                    {/* Chat Container */}
                    <View style={{ backgroundColor: '#E3E9EC', flex: 7 }}>
                        <ChatWindow>
                            {this.state.messages.map((r, i) =>
                                <Message
                                    displayName={r.nickName}
                                    message={r.message}
                                    id={r._id}
                                    key={i}
                                />
                            )}
                        </ChatWindow>
                    </View>

                    {/* Chat Footer */}
                    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                        <ChatFooter
                            onClick={this.handleMessageSent.bind(this)}
                            onInputChange={this.setUserInput.bind(this)}
                        />
                    </View>

                    {/* <Text style={styles.instructions}>Test Loc: Long: {this.state.long} Lat: {this.state.lat}</Text> */}
                </LinearGradient>
            </KeyboardAvoidingView>


        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    backButton: {
        left: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
};
