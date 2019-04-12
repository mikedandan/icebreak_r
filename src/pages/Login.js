import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, Header, Left, Right, Icon, Button, Body, Title, Content, Form, Input, Label, Item } from 'native-base';
import Nav from '../components/Nav';
import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {

    render() {

        return (
            <View>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        This is Content Section
              </Text>
                </Content>

                {/* <Text style={styles.thisIsAStyle}> this is the signup page</Text> */}
                <Text style={styles.redTex} onPress={() => Actions.main()}>go main page </Text>

                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <Button style={styles.button}><Text style={{ color: 'white', textAlign: 'center', width: 150 }}>Sign in</Text></Button>

                </Form>
                <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                    <Text>FORGOT PASSWORD? GET NEW!</Text>
                    <Text onPress={() => Actions.signup()}>DON'T HAVE AN ACCOUNT? Signup!</Text>
                </View>
            </View >
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 50,
        marginTop: 40
    },
    redTex: {
        color: 'red'
    },
    button: {
        // backgroundColor: 'white',
        alignSelf: 'center',
        marginBottom: 25

    },
};

