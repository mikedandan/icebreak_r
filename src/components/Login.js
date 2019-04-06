import React, { Component } from 'react';
import { Text, View} from 'react-native';


export default class Login extends Component {

    render() {

        return (
            <View>
                <Text style={styles.thisIsAStyle}> Login Page!</Text>
            </View>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
    },
};
