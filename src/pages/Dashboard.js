import React, { Component } from 'react';
import { Text, View} from 'react-native';
import DashHeaderCard from '../components/DashHeaderCard';
import { Actions } from 'react-native-router-flux';

export default class Dashboard extends Component {
    render() {
      return (
        <DashHeaderCard />
      );
    }
  }
