import React, { Component } from 'react';
import { Text, View, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';


export default class GroupChat extends Component {

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

    async checkPermission (){
        await navigator.geolocation.getCurrentPosition(
                () => this.setPermission(true),
                () => this.setPermission(false)
        )
        return this.setPermission;
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
        let hasLocationPermission = this.checkPermission();
        console.log("Permission Status: "+hasLocationPermission);
        await this.getLocation(hasLocationPermission);
        // await this.getDataFromDb();
        // await this.createUser();
    }

    // getDataFromDb = () => {
    //     console.log("VOID")
    //     axios.get('https://icebreakr-serv.herokuapp.com/api/user')
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // };

    render() {

        return (
            <View>
                <Text style={styles.instructions}>Test Loc: Long: {this.state.long} Lat: {this.state.lat}</Text>
            </View>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
    },
};
