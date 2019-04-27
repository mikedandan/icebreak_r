import React, { useState, useEffect } from 'react';
import { Button } from 'native-base';
import { Text, View, ScrollView, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/BackButton';
import { ChatWindow, ChatFooter } from '../components/ChatWindow';
// import socketIOClient from 'socket.io-client';
import io from 'socket.io-client';
import NavBar from '../components/Nav';
import decode from 'jwt-decode';

//https://icebreakr-serv.herokuapp.com/
// socket = io(`http://10.0.2.2:3000/group`);
// const socket = io.connect(`http://10.0.2.2:3000/`);
const socket = io('https://icebreakr-serv.herokuapp.com/', {
    transports: ['websocket'],
    secure: true
});

export default function EventChat() {

    const [positions, setPositions] = useState({ lat: 0, lon: 0 });
    const [messages, setMessages] = useState([]);
    const [userInput, setInput] = useState("");
    const [user, setUser] = useState({});
    const [eventID, setEventID] = useState("");

    const getToken = async () => {
        console.log("==============================");
        try {
            console.log("YAOZORS")
            const token = await AsyncStorage.getItem('token');
            const event = await AsyncStorage.getItem("eventID");
            console.log("EVENTID:"+event);
            setEventID(event);
            console.log("state"+event);
            if (token !== null) {
                // We have data!!
                console.log('user saved locally');
                //console.log(token);
                const decoded = decode(token);
                console.log(decoded);
                setUser({
                    userID: decoded.id,
                    nickName: decoded.displayName,
                    picture: decoded.picture
                });
                
            } else {
                console.log('no data');
            }

        } catch (error) {
            // Error retrieving data
        }
    }

    const getChatHistory = async () => {
        console.log("VOID")
        try {
            console.log("here:"+ eventID)
            const event = await AsyncStorage.getItem("eventID");
            const res = await axios.post(`https://icebreakr-serv.herokuapp.com/api/message/eventHistory`, { namespace: event});
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const load = async () => {

        Geolocation.getCurrentPosition(
            async (position) => {
                // console.log("In Geolocation Function" + position.coords.latitude + position.coords.longitude);
                setPositions({ lat: position.coords.latitude, lon: position.coords.longitude });
                const chatHistory = await getChatHistory();
                setMessages(chatHistory);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    const postMessage = async (newMessage) => {
        return axios.post('https://icebreakr-serv.herokuapp.com/api/message/new', newMessage)
            .then(async function (response) {
                //console.log(response);
                //after pushing to database, clear the input
                setInput("");
                let chatHistory = await getChatHistory();
                setMessages(chatHistory);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleMessageSent = async () => {
        console.log("WEEEWOO");
        const newMessage = {
            "nickName": user.nickName,
            "message": userInput,
            "picture": user.picture,
            "userID": user.userID,
            "lon": positions.lon,
            "lat": positions.lat,
            "namespace": eventID,
            "date": Date.now()
        }
        console.log(userInput);
        socket.emit('newMessageToServer', newMessage);
        await postMessage(newMessage);
    }

    useEffect(() => {
        console.log("in use effect");
        //console.log(AsyncStorage.getItem("eventID"));
        load();
        getToken();
        console.log("socket" + socket.id);

        socket.on('messageToClients', async () => {
            console.log("we here bois!!!!!");
            load();
        });
    }, []);

    return (
        <View style={styles.container} behavior="padding" enabled>
            <NavBar title ={'Event Chat'}/>

            {/* BackButton */}
            {/* Chat Container */}
            <View style={{ backgroundColor: '#E3E9EC', flex: 7 }}>
                <ChatWindow
                    state={messages}
                    currentUser={user}
                />
            </View>

            {/* Chat Footer */}
            <KeyboardAvoidingView behavior="padding">

                <ChatFooter
                    onClick={handleMessageSent}
                    onInputChange={setInput}
                    state={userInput}
                />
            </KeyboardAvoidingView>

            {/* <Text style={styles.instructions}>Test Loc: Long: {this.state.long} Lat: {this.state.lat}</Text> */}

        </View>
    );
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