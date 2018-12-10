import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  AsyncStorage,
  TouchableOpacity,
  ProgressViewIOS,
  StyleSheet,
  Image
} from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar'
import ScoreBar from '../components/ScoreBar';
import PoliticalScoreBar from '../components/PoliticalScoreBar';
import {CircularProgress} from 'react-native-circular-progress';
import {Font} from 'expo';

export default class UserHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eScore: 0,
      sScore: 0,
      gScore: 0,
      pScore: 0,
      fontsLoaded: false
    }
  }
  componentWillMount() {
    fetch("https://b87812vlr2.execute-api.us-east-1.amazonaws.com/default/scorecalc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userID: this.props.navigation.getParam('userID')})
    }).then(response => response.json()).then(json => {
      console.log('json', json);
      this.setState({eScore: json.eScore, sScore: json.sScore, gScore: json.gScore, pScore: json.pScore})
    });
  }
  componentDidMount() {
    Font.loadAsync({customFont: require('../assets/fonts/Roboto-Medium.ttf')}).then(() => this.setState({fontsLoaded: true}));
  }
  render() {
    while (!this.state.fontsLoaded) {
      return (<Text>Loading..</Text>);
    }
    return (<View style={styles.background}>
      <CustomStatusBar/>
      <Header/>
      <View style={styles.container}>
        <Text style={[
            styles.title, {
              fontFamily: "customFont"
            }
          ]}>Your Impact</Text>
        <CircularProgress size={180} width={24} fill={0.4*this.state.eScore+0.4*this.state.sScore+0.2*this.state.gScore} lineCap="round" rotation={0} tintColor="#F1C40F" backgroundColor="#EEEEEE">
          {
            (fill) => (<Text style={[
                styles.letterGrade, {
                  fontFamily: "customFont"
                }
              ]}>
              {"B"}
            </Text>)
          }
        </CircularProgress>
        <View style={styles.barContainer}>
          <Text style={[
              styles.barText, {
                fontFamily: "customFont"
              }
            ]}>Environmental - {this.state.eScore.toString()}</Text>
          <ScoreBar value={this.state.eScore} color={"#27AE60"}/>
          <Text style={[
              styles.barText, {
                fontFamily: "customFont"
              }
            ]}>Social - {this.state.sScore.toString()}</Text>
          <ScoreBar value={this.state.sScore} color={"#16A085"}/>
          <Text style={[
              styles.barText, {
                fontFamily: "customFont"
              }
            ]}>Governance - {this.state.gScore.toString()}</Text>
          <ScoreBar value={this.state.gScore} color={"#2980B9"}/>
          <Text style={[
              styles.barText, {
                fontFamily: "customFont"
              }
            ]}>Political - Liberal</Text>
          <PoliticalScoreBar value={this.state.pScore}/>
        </View>
      </View>
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
