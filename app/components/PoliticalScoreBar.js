'use strict'
import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

class PoliticalScoreBar extends Component {
  render() {
    const value = this.props.value.toString() + "%";
    return (<View style={styles.background}>
      <View style={[
          styles.filling, {
            width: value
          }
        ]}></View>
    </View>);
  }
}

const styles = StyleSheet.create({
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
