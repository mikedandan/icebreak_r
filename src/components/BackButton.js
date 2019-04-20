import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class BackButton extends Component {
 componentDidMount = () => {
     
 }
    render() {

        return (
            <View>
                <Icon style={styles.backButton} type="FontAwesome" name="chevron-left" onPress={() => Actions.main()}/>
            </View>
        );
    }
}

const styles = {
    backButton: {
        fontSize: 18,
        paddingLeft: 8,
        color: "white"
    }
};