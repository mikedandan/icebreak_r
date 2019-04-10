import React, { Component } from 'react';
import { View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Nav extends Component {

    render() {

        return (
            <Container>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text>
                This is Content Section
              </Text>
            </Content>
        
          </Container>
        );
    }
}


const styles = {
    thisIsAStyle: {
        fontSize: 20,
        backgroundColor: 'red',
        height: 25
    },
};

