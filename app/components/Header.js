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

class Header extends Component {
  render() {
    return (<View style={styles.background}>
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>{this.props.returnHome();}}>
        <Image style={styles.logo} source={require('../assets/profile.png')}/>
      </TouchableOpacity>
        <TextInput placeholder='Search' style={styles.searchBar} onChangeText={(search) => this.setState({search})}/>
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
    width: 40,
    marginRight: 20
  },
  searchBar: {
    backgroundColor: '#ECF0F1',
    width: 300,
    height: 30,
    paddingLeft: 12
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profile: {
    width: 40,
    height: 40
  }
})

module.exports = Header
