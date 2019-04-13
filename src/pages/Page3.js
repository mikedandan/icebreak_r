import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Page3 extends Component {

    render() {

        return (
            <View>
                <Text style={styles.thisIsAStyle}> this is page 3!</Text>

                <Text onPress={() => Actions.home()}> link to home</Text>

            </View>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
    },
};

