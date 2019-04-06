import React, { Component } from 'react';
import { Text, View} from 'react-native';


export default class Boilerplate extends Component {

    render() {

        return (
            <View>
                <Text style={styles.thisIsAStyle}> Hello  World!</Text>
            </View>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
    },
};

