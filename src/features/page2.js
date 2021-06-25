import React, { Component } from 'react';
import { Text, View} from 'react-native';
import Nav from '../components/Nav';
import { Actions } from 'react-native-router-flux';

export default class Page2 extends Component {

    render() {

        return (
            <View>
                <Nav />
                <Text style={styles.thisIsAStyle}> this is page Two</Text>
                <Text style={styles.redTex} onPress={() =>  Actions.main()}>go to main page </Text>
            </View>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
        marginTop: 40
    },
    redTex:{
        color: 'red'
    }
};

