import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import CustomStatusBar from '../components/CustomStatusBar';
import Header from '../components/Header';
import {Font} from 'expo';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    this._loadInitialState().done();
    Font.loadAsync({customFont: require('../assets/fonts/Roboto-Medium.ttf')}).then(() => this.setState({fontsLoaded: true}));
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('UserHome');
    }
  }

  render() {
    while (!this.state.fontsLoaded) {
      return (<Text>Loading..</Text>);
    }
    return (<View style={styles.background}>
      <CustomStatusBar/>
      <Image style={styles.logo} source={require('../assets/white.png')}/>
      <Text style={styles.logoText}>WiseWallet</Text>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={-100} style={{
          width: "100%",
          flex: 1,
          justifyContent: 'center'
        }}>
        <View style={styles.container}>
          <TextInput placeholder='Email' onChangeText={(email) => this.setState({email})} style={styles.textBox}/>
          <TextInput placeholder='Password' onChangeText={(password) => this.setState({password})} style={styles.textBox}/>
          <TouchableOpacity onPress={this.login} style={styles.logInButton}>
            <View style={styles.containerButton}>
              <Text style={[
                  styles.buttonText, {
                    fontFamily: "customFont"
                  }
                ]}>Log In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.createButton}>
        <View style={styles.containerButton}>
          <Text style={[
              styles.buttonText, {
                fontFamily: "customFont"
              }
            ]}>Create Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={[
              styles.forgotText, {
                fontFamily: "customFont"
              }
            ]}>Forgot password?</Text>
      </TouchableOpacity>
    </View>)
  }

  login = () => {
    fetch("https://tldpv6umn7.execute-api.us-east-1.amazonaws.com/default/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: this.state.email, password: this.state.password})
    }).then(response => response.json()).then(json => {
      console.log('json', json);
      if (json.success) {
        this.props.navigation.navigate('UserHome', {userID: json.userID});
      } else {
        alert('error');
      }
    });
  }
}

var styles = StyleSheet.create({
  background: {
    backgroundColor: "#2C3E50",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    paddingTop: 100
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  textBox: {
    width: "70%",
    height: 50,
    paddingLeft: 20,
    borderRadius: 25,
    backgroundColor: "#EEEEEE",
    marginBottom: 10,
    marginTop: 10
  },
  logInButton: {
    width: "70%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3498DB",
    marginTop: 10
  },
  createButton: {
    width: "70%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1ABC9C",
    marginBottom: 25
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20
  },
  forgotText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 15
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 30,
    position: 'absolute',
    top: 190
  },
  logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 30
  }
});
