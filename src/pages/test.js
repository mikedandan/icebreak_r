import React, { Component } from 'react';
import { Text, View, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import io from 'socket.io-client'

export default class ThisPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            long: 0,
            permission: false,
            data: {}
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
        this.setState({ permission: bool })
    }

    async requestGeoPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'IceBreakr Location Permission',
                    message:
                        'Icebreakr needs access to your camera ' +
                        'so you can creep on people.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use geolocation');
                this.setPermission(true);
            } else {
                console.log('Location permission denied');
                this.setPermission(false);
            }
        } catch (err) {
            console.warn(err);
        }
    }

    checkPermission = () => {
        navigator.geolocation
            .getCurrentPosition(
                () => this.setPermission(true),
                () => this.setPermission(false)
            );
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

    async componentDidMount() {
        // let socket = io("http://169.234.78.150:3000");
        // await this.requestGeoPermission();
        // let hasLocationPermission;
        // await this.checkPermission();
        // hasLocationPermission = this.state.permission;
        // await this.getLocation(hasLocationPermission);
        await this.getDataFromDb();
    }

    getDataFromDb = () => {
        console.log("VOID")
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    render() {

        return (
            <View>
                <Text style={styles.instructions}>Test Loc: Long: {this.state.lat} Lat: {this.state.long}</Text>
            </View>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
    },
};
