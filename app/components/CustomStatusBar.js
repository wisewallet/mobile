'use strict'
import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

class CustomStatusBar extends Component{
  render(){
    return(
      <View style={styles.statusBarBackground}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: "#2C3E50",
  }
})

module.exports= CustomStatusBar
