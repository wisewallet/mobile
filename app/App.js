import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from './views/Login.js';
import UserHome from './views/UserHome.js';

const Application = createStackNavigator({
  Home: {
    screen: Login
  },
  UserHome: {
    screen: UserHome
  }
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
);

export default class App extends React.Component {
  render() {
    return (<Application/>);
  }
}
