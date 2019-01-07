'use strict'
import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

class PoliticalScoreBar extends Component {
  render() {
    const value = this.props.value.toString() + "%";
    console.log(this.props);
    return (<View style={this.props.loaded ? styles.background : styles.unloadedBackground}>
      <View style={[
          styles.filling, {
            width: value
          }
        ]}></View>
    </View>);
  }
}

const styles = StyleSheet.create({
  unloadedBackground:{
    height: 24,
    width: "100%",
    backgroundColor: "#EEEEEE",
    borderRadius: 12,
    margin: 10,
    marginLeft: 0
  },
  background: {
    height: 24,
    width: "100%",
    backgroundColor: "#E74C3C",
    borderRadius: 12,
    margin: 10,
    marginLeft: 0
  },
  filling: {
    height: 24,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "#3498DB",
  }
})

module.exports = PoliticalScoreBar
