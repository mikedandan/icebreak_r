import React, { Component } from 'react';
import { View} from 'react-native';
import DashHeaderCard from '../components/DashHeaderCard';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
// import { Actions } from 'react-native-router-flux';

export default class Dashboard extends Component {
    render() {
      return (
          <View>
        <DashHeaderCard />
        </View>
      );
    }
  }
