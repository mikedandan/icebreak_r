import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List, ListItem, Icon, Textarea, Form } from 'native-base';

export function ChatWindow({ children }) {
    return <List>{children}</List>;
}

export class Message extends Component {
    render() {
        return (
            <ListItem>
                <Text>{this.props.displayName}</Text>
                <Text>{this.props.message}</Text>
                <Text>{this.props.id}</Text>
            </ListItem>
        );
    }
}

export class ChatFooter extends Component {


    render() {
        return (
            <View style={styles.inputContainer}>

                <Form>
                    <Textarea rowSpan={2} placeholder="Your message here" onChangeText={(value) => this.props.onInputChange(value)}/>
                </Form>

                <Icon style={styles.sendButton} type="FontAwesome" name="arrow-right" onPress={this.props.onClick}/>

            </View>
        );
    }
}


const styles = {
    sendButton: {
        // color: "#42AAD8"
        color: "#FF7F4F",
    },
    inputContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
};

