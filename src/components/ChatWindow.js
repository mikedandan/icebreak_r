import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { List, ListItem } from 'native-base';


export function ChatWindow({ children }) {
    return <List>{children}</List>;
}

export class Message extends Component {

    render() {

        return (
            <ListItem>
                <Text>TEST</Text>
                <Text>{this.props.displayName}</Text>
                <Text>{this.props.email}</Text>
                <Text>{this.props.id}</Text>
            </ListItem>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
    },
};

