import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
// const dataArray = [Sam', 'Bob', 'Jimmy', 'Derek']





const dataArray = [
    {
        name: 'Sam',
        image: require('../images/avatars/RandomAnimals_brown_bear.png')
    },

    {
        name: 'Bob',
        image: require('../images/avatars/RandomAnimals_brown_bear.png')
    },
    {
        name: 'Eric',
        image: require('../images/avatars/RandomAnimals_brown_bear.png')
    },
    {
        name: 'Peter',
        image: require('../images/avatars/RandomAnimals_brown_bear.png')
        
    }
]


export default class InboxPrivateMessage extends Component {

    inbox = (data) => {

        return data.map(data =>


            <View style={{ flex: 2, paddingLeft: 5 }}>
                <Image source={ require('../images/avatars/RandomAnimals_brown_bear.png')} name="Avatar" />
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                    <Text>{data.name}</Text>
                </View>
            </View>

        );

    }

    render() {

        return (
            <View style={{ height: 130, marginTop: 20, marginBottom: 20 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.inbox(dataArray)} 
                    </ScrollView>

            </View>
                );
            }
        }
        
        
const styles = {
                    thisIsAStyle: {
                    fontSize: 50,
            },
        };
        
