import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/BackButton';
import { ChatWindow, Message } from '../components/ChatWindow';


export default class GroupChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            long: 0,
            permission: false,
            messages: []
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

    getLocation(hasLocationPermission) {
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
        axios.get('https://icebreakr-serv.herokuapp.com/api/user')
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
        // let socket = io("http://169.234.78.150:3000");
        let hasLocationPermission = this.checkPermission();
        console.log("Permission Status: " + hasLocationPermission);
        await this.getLocation(hasLocationPermission);
        await this.getChatHistory();
    }

    render() {

        return (
            <View style={styles.container}>
                <LinearGradient colors={['#42AAD8', '#A8D7F7']} style={{ flex: 1 }}>

                    {/* BackButton */}
                    <View style={styles.backButton}>
                        <BackButton />
                    </View>

                    {/* Chat Container */}
                    <View style={{ backgroundColor: '#FFFFFF', flex: 7 }}>
                        <ChatWindow>
                            {this.state.messages.map((r, i) =>
                                <Message
                                    displayName={r.displayName}
                                    email={r.href}
                                    id={r._id}
                                    key={i}
                                />
                            )}
                        </ChatWindow>
                    </View>

                    {/* Chat Footer */}
                    <View style={{ flex: 1 }}>
                        <View style={{alignSelf: "flex-end", borderWidth: 1}}>

                        </View>
                    </View>

                    {/* <Text style={styles.instructions}>Test Loc: Long: {this.state.long} Lat: {this.state.lat}</Text> */}
                </LinearGradient>
            </View>


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
