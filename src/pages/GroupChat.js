import React, { useState, useEffect } from 'react';
import { Container, Header, Left, Right, Icon, Button, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import { Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/BackButton';
import { ChatWindow, Message, ChatFooter } from '../components/ChatWindow';
import io from 'socket.io-client'

const socket = io(`http://10.0.2.2:3000/group`);

export default function GroupChat() {

    const [positions, setPositions] = useState({ lat: 0, lon: 0 });
    const [messages, setMessages] = useState([]);
    const [userInput, setInput] = useState("Your Message Here");
    const maxDistance = 1;

    const getChatHistory = async (position) => {
        console.log("VOID")
        try {
            console.log(`Location before sent to backend: \n ${positions.lat},${positions.lon}`);
            let res = await axios.get('http://10.0.2.2:3000/api/message/')
            const filteredMessages = res.data.filter((data) => {
                console.log("END OF THE WORLD")
                // console.log(data)
                console.log(`Message lat ${data.lat}, lon ${data.lon} \n User lat ${position.coords.latitude} lon ${position.coords.longitude}`)
                const distance = setDistance(data.lat, data.lon, position.coords.latitude, position.coords.longitude);
                return distance > maxDistance;
            });
            console.log("#$@#$!@#$Filtered Messages#@#$(*@#$")
            console.log(filteredMessages);
            return filteredMessages;
        } catch (err) {
            console.log(err);
        }
    };

    const setLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log("yikes" + position.coords.latitude + position.coords.longitude);
                setPositions({ lat: position.coords.latitude, lon: position.coords.longitude });
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    const uponLoad = async () => {
        Geolocation.getCurrentPosition(
            async (position) => {
                console.log("In Geolocation Function" + position.coords.latitude + position.coords.longitude);
                setPositions({ lat: position.coords.latitude, lon: position.coords.longitude });
                const chatHistory = await getChatHistory(position);
                setMessages(chatHistory);
                // setTimeout(async () => {
                //     console.log(`!!!!!!!!!!!Location afterset: \n ${positions.lat},${positions.lon}`);
                //     setMessages(chatHistory);
                // }, 2000);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );

        //   setPositions({ lat: userLat, lon: userLon});
        // setNumber(number + 1);
        // setMessages(getChatHistory());

        // filterProximity(chatHistory);
    }

    const postMessage = async (newMessage) => {
        // let messageArray = this.state.messages;
        // await messageArray.push(newMessage);
        // const self = this;
        return axios.post('http://10.0.2.2:3000/api/message/new', newMessage)
            .then(async function (response) {
                console.log(response);
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
        const username = "Potato";
        const newMessage = {
            "nickName": username,
            "message": userInput,
            "picture": "test.png",
            "userID": "12345",
            "lon": positions.lon,
            "lat": positions.lat,
            "namespace": "group",
            "date": Date.now()
        }
        //https://icebreakr-serv.herokuapp.com/
        socket = io(`http://10.0.2.2:3000/group`, {
            query: {
                username
            }
        });
        await socket.emit('newMessageToServer', userInput);
        await postMessage(newMessage);
    }

    const setDistance = (lat1, lon1, lat2, lon2, unit) => {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            console.log("distance is : " + 0);
            return 0;
        } else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") { dist = dist * 1.609344 }
            if (unit == "M") { dist = dist * 0.8684 }
            return dist;
        }
    }

    const filterProximity = (array) => {
        let filteredMessages = array.filter((data) => {
            console.log("END OF THE WORLD")
            // console.log(data)
            console.log(`Message lat ${data.lat}, lon ${data.lon} \n User lat ${this.state.lat} lon ${this.state.long}`)
            const distance = setDistance(data.lat, data.lon, this.state.lat, this.state.long);
            return distance > maxDistance;
        });
        console.log(filteredMessages);
        setMessages(filteredMessages);
    }

    useEffect(() => {
        uponLoad();
        socket.on('messageToClients',async () =>{
            // const newMsg = buildHTML(msg);
            // document.querySelector('#messages').innerHTML += newMsg;
            const newMessages = await getChatHistory();
            setMessages(newMessages);
        });
    }, []);

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <LinearGradient colors={['#42AAD8', '#A8D7F7']} style={{ flex: 1 }}>
                {/* <Text>YIKES:{number}</Text>
                <Button onPress={uponLoad}><Text>Test</Text></Button> */}
                {/* BackButton */}
                <Text>Lat: {positions.lat}Lon: {positions.lon}</Text>
                <View style={styles.backButton}>
                    <BackButton />
                </View>

                {/* Chat Container */}
                <View style={{ backgroundColor: '#E3E9EC', flex: 7 }}>
                    <ChatWindow>
                        {messages.map((r, i) =>
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
                        onClick={handleMessageSent}
                        onInputChange={setInput}
                    />
                </View>

                {/* <Text style={styles.instructions}>Test Loc: Long: {this.state.long} Lat: {this.state.lat}</Text> */}
            </LinearGradient>
        </KeyboardAvoidingView>
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