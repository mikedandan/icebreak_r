import React, { Component } from 'react';
import { Text, View} from 'react-native';
import Nav from '../components/Nav';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

    render() {

        return (
            <View>
                <Nav />
                <Text style={styles.thisIsAStyle}> This is a home page !</Text>
                <Text onPress={() =>  Actions.page2()}>go to secound Page </Text>
            </View>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
        marginTop: 40
    },
};

