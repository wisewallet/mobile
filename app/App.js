import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './views/Login.js';
import UserHome from './views/UserHome.js';
import TransactionTable from './views/TransactionTable.js';

const Application = createStackNavigator({
  Home: {
    screen: Login
  },
  UserHome: {
    screen: UserHome
  },
  TransactionTable: {
    screen: TransactionTable
  },
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
);
const AppContainer = createAppContainer(Application);

export default class App extends React.Component {
  render() {
    return (<AppContainer/>);
  }
}
