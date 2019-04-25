import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {Icon} from 'native-base'
export default class Nav extends Component {
  
  render() {

    return (
      <View>
        <View style={styles.status}></View> 
        <View style={styles.containerStyle}>
          <TouchableOpacity onPress={this.props.openDrawer} onShowUnderlay={false} style={{ width: 100 }}>
            <Icon style={styles.sendButton} type="FontAwesome" name="chevron-left" onPress={() => Actions.main()} />

          </TouchableOpacity> 


          <Text style={styles.navHeader}> Group Chat? </Text>
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
    backgroundColor: 'blue',

    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  status: {
    height: getStatusBarHeight(),
    backgroundColor: 'blue',
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
    color: "#FF7F4F",
  }
};