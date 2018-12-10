'use strict'
import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

class ScoreBar extends Component {
  render() {
    const value = this.props.value.toString() + "%";
    return (<View style={styles.background}>
      <View style={[
          styles.filling, {
            width: value
          }, {
            backgroundColor: this.props.color
          }
        ]}></View>
    </View>);
  }
}

const styles = StyleSheet.create({
  background: {
    height: 24,
    width: "100%",
    backgroundColor: "#EEEEEE",
    borderRadius: 12,
    margin: 10,
    marginLeft: 0
  },
  filling: {
    height: 24,
    borderRadius: 12
  }
})

module.exports = ScoreBar
