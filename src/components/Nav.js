import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Nav extends Component {
  
goHome(){
Actions.dashboard();
}

  render() {

    return (
      <View>
        <View style={styles.status}></View> 
        <View style={styles.containerStyle}>
          <TouchableOpacity onShowUnderlay={false} style={{ width: 100 }}>
            <Icon style={styles.sendButton} type="FontAwesome" name="angle-double-left" onPress={() => Actions.dashboard()} />
          </TouchableOpacity> 


          <Text style={styles.navHeader}> {this.props.title} </Text>

          <View style={styles.spacer} ></View>

        </View> 
        
      </View>
    );
  }
}


const styles = {
  containerStyle: {
    height: 45,
    width: '100%',
    backgroundColor: '#63aedd',

    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  status: {
    height: getStatusBarHeight(),
    backgroundColor: '#63aedd',
  },
  logo: {
    marginLeft: 15,
    marginTop: 5,
    height: 15,
    width: 20,
    resizeMode: 'contain'
  },
  navHeader: {
    fontWeight: 'bold',
    alignItems: 'center',
  },
  spacer: {
    width: 100,
  },
  sendButton: {
    // color: "#42AAD8"
    color: "black",
    marginLeft: 15
  }
};