import React, { Component } from 'react';
import { Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class ThisPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "No where yet",
            permission: false
        };
      }
    
      setPosition(pos){
        this.setState({ position: pos });
      }

      checkPermission = () => {
        navigator.geolocation
        .getCurrentPosition(
          () => this.setState({permission: true}),
          () => this.setState({permission: false})
        );
      }

      getLocation(hasLocationPermission){
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
    
      componentDidMount() {
        let hasLocationPermission;
        // Instead of navigator.geolocation, just use Geolocation.
        navigator.geolocation.requestAuthorization();
        this.checkPermission();
        hasLocationPermission = this.state.permission;
        getLocatuion(hasLocationPermission);
      }

    render() {

        return (
            <View>
                <Text style={styles.instructions}>Test Loc: {this.state.position}</Text>
            </View>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
    },
};
