import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";


export default class DashHeaderCard extends Component {

    
    render() {
        return (
          <View>
            <Header />
            <Content padder>
              <Card transparent>
                <CardItem>
                  <Body>
                    <Text>
                      This is just a transparent card with some text to boot.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </View>
        );
      }
    }


// const styles = {
//     thisIsAStyle: {
//         fontSize: 20,
//         backgroundColor: 'red',
//         height: 25
    // },
// };

