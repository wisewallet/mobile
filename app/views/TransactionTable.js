import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import CustomStatusBar from '../components/CustomStatusBar';
import Table from '../components/Table';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar'
import {Font} from 'expo';

export default class TransactionTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transactionList: [],
    }
  }
  componentWillMount() {
    console.log(this.props.navigation.getParam('userID'));
    fetch("https://b87812vlr2.execute-api.us-east-1.amazonaws.com/default/scorecalc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userID: this.props.navigation.getParam('userID')})
    }).then(response => response.json()).then(json => {
      const transactionList =  Object.entries(json.transactionList).map((t) =>{
        return t[1];
      });
      console.log('transactionList', transactionList);
      this.setState({transactionList,})
    });
  }
  componentDidMount() {
    Font.loadAsync({customFont: require('../assets/fonts/Roboto-Medium.ttf')}).then(() => this.setState({fontsLoaded: true}));
  }
  render() {
    const buildCol = (param) =>{
      return this.state.transactionList.map((t) => {
        return <View style={{borderWidth: 1, borderColor:'#fff'}}><Text style={{paddingRight: 50}}>{t[param]}</Text></View>;
      });
    };
    const tableData = {
      companies: buildCol('name'),
      dates: buildCol('date'),
      amounts: buildCol('amount'),
      people: buildCol('pScore'),
      planet: buildCol('eScore'),
      policy: buildCol('gScore'),
      politics: buildCol('sScore'),
    };
    while (!this.state.fontsLoaded) {
      return (<Text style={{paddingRight: 50, borderWidth: 1, borderColor:'#fff'}}>Loading..</Text>);
    }
    return (<View style={styles.background}>
      <CustomStatusBar/>
      <Header returnHome={()=>{this.props.navigation.navigate('UserHome');}}/>
      <ScrollView horizontal={true}>

      <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch" }}>
        <View style={{ flex: 2, alignSelf: 'stretch', borderWidth: 1, borderColor:'#fff'}}>
          <Text style={{paddingRight: 50, fontSize: 20, fontWeight: 'bold'}}>Company</Text>
          {tableData.companies}
        </View>
        <View style={{ flex: 2, alignSelf: 'stretch', borderWidth: 1, borderColor:'#fff'}}>
          <Text style={{paddingRight: 50}}>Date</Text>
          {tableData.dates}
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1, borderColor:'#fff' }}>
          <Text style={{paddingRight: 50}}>Amount</Text>
          {tableData.amounts}
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1, borderColor:'#fff' }}>
          <Text style={{paddingRight: 50}}>People</Text>
          {tableData.people}
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1, borderColor:'#fff' }}>
          <Text style={{paddingRight: 50}}>Planet</Text>
          {tableData.planet}
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1, borderColor:'#fff' }}>
          <Text style={{paddingRight: 50}}>Policy</Text>
          {tableData.policy}
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', borderWidth: 1, borderColor:'#fff' }}>
          <Text>Politics</Text>
          {tableData.politics}
        </View>
      </View>

      </ScrollView>
      <MenuBar/>
    </View>);
  }
  logout = () => {
    alert('Test');
    this.props.navigation.navigate('Home');
  }
}

var styles = StyleSheet.create({
  progressView: {
    width: '80%',
    marginBottom: 50,
    marginTop: 25,
    transform: [
      {
        scaleX: 1.0
      }, {
        scaleY: 15
      }
    ]
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 15,
    marginLeft: 15
  },
  background: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 30,
    marginBottom: 20
  },
  barContainer: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3
  },
  barText: {
    fontSize: 18
  },
  letterGrade: {
    fontSize: 50
  }
});