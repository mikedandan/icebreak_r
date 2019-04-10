import React, { Component } from 'react';
import { Text, View} from 'react-native';
import Login from '../components/Login';

export default class ThisPage extends Component {

    render() {

        return (
            <View>
                <Text style={styles.thisIsAStyle}> Hello  World!</Text>
                <Login/>
            </View>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
    },
};

