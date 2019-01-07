'use strict'
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

class MenuBar extends Component {
  render() {
    return (<View style={styles.background}>
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>{this.props.goToTable();}}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/white.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/white.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/white.png')}/>
      </TouchableOpacity>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  background: {
    height: 60,
    backgroundColor: "#2C3E50"
  },
  logo: {
    height: 40,
    width: 40
  },
  searchBar: {
    backgroundColor: '#ECF0F1',
    width: 300,
    height: 30,
    paddingLeft: 12
  },
  container: {
    width: "100%",
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  profile: {
    width: 40,
    height: 40
  }
})

module.exports = MenuBar
