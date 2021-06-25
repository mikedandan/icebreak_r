import React, { Component } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import { Fab, Button, Icon, View} from 'native-base';

// import { Grid, Row } from 'native-base';
// import { send, subscribe } from 'react-native-training-chat-server';



export default class Chat extends Component {

    constructor(props) {
        super(props)
        this.state = {
          active: false,
          typing: '',
        messages: ['test1', 'test2', 'new message', '4th message', 'test','','','',''],
        messageType: ''
        };
      }

    // state = {
    //     typing: '',
    //     messages: ['test1', 'test2', 'new message', '4th message'],
    // };

    renderItem = () => {
        const self = this;
        return (
            <View style={styles.row}>
                <Fab
                    active={self.state.active}
                    direction="left"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF'}}
                    position="topRight"
                    onPress={() => {
                        if(self.state.active === true){
                        self.setState({ active: false })
                    }
                    else if (self.state.active === false){
                        self.setState({ active: true })
                    } else {
                        return
                    }
                    }
                    }>
                    <Icon name="share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon name="mail" />
                    </Button>
                </Fab>
                <Image style={styles.avatar} source={{ uri: 'https://www.andrew.cmu.edu/user/adowling/pokemon!/Images/pikachu.jpg' }} />
                <View style={styles.rowText}>
                    <Text style={styles.sender}>Test Sender {self.state.active.toString()}</Text>
                    <Text style={styles.message}>Test Body copy</Text>
                </View>
            </View>
        );
    }

    render() {

        return (
            <View style={styles.container}>
                {/* Here is where the messages get pulled in */}
                <FlatList
                    data={this.state.messages}
                    renderItem={this.renderItem.bind(this)}
                    inverted
                />
{/* 
                Sample Direct message 
                <View style={styles.row}>
                    <Image style={styles.avatar} source={{ uri: 'https://res.cloudinary.com/teepublic/image/private/s--gfS65FhK--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1530450914/production/designs/2844623_1.jpg' }} />
                    <View style={styles.rowTextDirect}>
                        <Text style={styles.sender}>Direct Sender</Text>
                        <Text style={styles.message}>Direct message sample text.</Text>
                    </View>
                </View>

                Sample User sent message 
                <View style={styles.row}>
                    <Image style={styles.avatar} source={{ uri: 'https://res.cloudinary.com/teepublic/image/private/s--gfS65FhK--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1530450914/production/designs/2844623_1.jpg' }} />
                    <View style={styles.rowTextSender}>
                        <Text style={styles.sender}>Sender Sender</Text>
                        <Text style={styles.message}>Sender message sample text. Lorem  Ipsum thiealra;sjdk tlka jsdlj a;lwjeflaskj ;laj tlkj lkjsa lskjal;ekj als;dfj lkarsjtg kldhnxclkjgaioselkjt sdoiflhk szxjfa E df.</Text>
                    </View>
                </View> */}

                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.footer}>
                        <TextInput
                            value={this.state.typing}
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Type something nice"
                        //   onChangeText={text => this.setState({ typing: text })}
                        />
                        <TouchableOpacity onPress={this.sendMessage}>
                            <Text style={styles.send}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF'
    },
    row: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    avatar: {
        borderRadius: 20,
        width: 40,
        height: 40,
        marginRight: 10
    },
    rowText: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    rowTextSender: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#E0FCFD',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    rowTextDirect: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#FF5419',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    message: {
        fontSize: 18
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    input: {
        paddingHorizontal: 20,
        fontSize: 18,
        flex: 1
    },
    send: {
        alignSelf: 'center',
        color: 'lightseagreen',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20
    }
});