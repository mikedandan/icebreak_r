import React, { Component } from 'react';
import { Text, View, FlatList, Image, TextInput } from 'react-native';
import { Fab, Icon, Textarea, Form } from 'native-base';


// {messages.map((r, i) =>
//     <Message
//         displayName={r.nickName}
//         message={r.message}
//         id={r._id}
//         key={i}
//     />
// )}

export function ChatWindow(props) {
    const currentUser = props.currentUser.userID;
    console.log(props);
    const renderItem = ({ item }) => {
        console.log("Chat window function No fun derek is here");
        // console.log(item);
        console.log(`Message ID ${item.userID} \n Current User: ${currentUser}`)
        //  === props.user.userID
        if (tem.userID === currentUser){
            console.log("DEREKUUU")
            return (
                <View style={styles.row}>
                
                    <Image style={styles.avatar} source={{ uri: 'https://www.andrew.cmu.edu/user/adowling/pokemon!/Images/pikachu.jpg' }} />
                    <View style={styles.rowTextSender}>
                        <Text style={styles.sender}>{item.nickname}</Text>
                        <Text style={styles.message}>{item.message}</Text>
                    </View>
                </View>
            );
        }
        else{
            console.log("SAMMMUU")
            return (
                <View style={styles.row}>
                
                    <Image style={styles.avatar} source={{ uri: 'https://www.andrew.cmu.edu/user/adowling/pokemon!/Images/pikachu.jpg' }} />
                    <View style={styles.rowText}>
                        <Text style={styles.sender}>{item.nickname}</Text>
                        <Text style={styles.message}>{item.message}</Text>
                    </View>
                </View>
            );
        }
        
        // return (
        //     <View style={styles.row}>
            
        //         <Image style={styles.avatar} source={{ uri: 'https://www.andrew.cmu.edu/user/adowling/pokemon!/Images/pikachu.jpg' }} />
        //         <View style={styles.rowText}>
        //             <Text style={styles.sender}>{item.nickname}</Text>
        //             <Text style={styles.message}>{item.message}</Text>
        //         </View>
        //     </View>
        // );
    }

    return <View>
        <FlatList
            data={props.state}
            renderItem={renderItem}
            
        />
    </View>
    // return <Text>Testing the stuffzzzzzz</Text>
}


export function ChatFooter(props) {

        return (
            <View style={styles.footer}>

                <TextInput
                    value={props.state}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Type something nice"
                    onChangeText={(value) => props.onInputChange(value)}
                />
                {/* <Form>
                    <Textarea rowSpan={2} placeholder="Your message here" onChangeText={(value) => this.props.onInputChange(value)} />
                </Form> */}

                <Icon style={styles.sendButton} type="FontAwesome" name="arrow-right" onPress={props.onClick} />

            </View>
        );
    
}


const styles = {
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
};

