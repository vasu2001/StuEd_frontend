import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import StateContext from '../../context/StateContext';
import Snackbar from 'react-native-snackbar';

const colleges = [
  {
    label: 'Jaypee',
    value: 'Jaypee',
  },
  {
    label: 'Amity',
    value: 'Amity',
  },
];

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collegeName: 'Jaypee',
      phoneNo: '0000000000',
      password: '12345',
    };
  }

  static contextType = StateContext;

  login = () => {
    if (this.state.collegeName === undefined) {
      Snackbar.show({
        text: 'Select a college',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#50C9CE',
      });
    } else if (this.state.phoneNo.length !== 10) {
      Snackbar.show({
        text: 'Enter a valid Phone No',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#50C9CE',
      });
    } else if (this.state.password === '') {
      Snackbar.show({
        text: 'Enter password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#50C9CE',
      });
    } else this.context.toggleSignin();
  };

  signup = () => {
    this.props.navigation.navigate('Signup');
  };

  forgetPassword = () => {
    this.props.navigation.navigate('Forget Password');
  };

  render() {
    const placeholder = {
      label: 'Select Your College Name',
      value: null,
      color: '#9EA0A4',
    };

    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{resizeMode: 'stretch'}}
          source={require('../../assets/background.jpg')}
          style={styles.image}>
          <View style={styles.uptext}>
            <Text style={styles.main}>StuEd - Study</Text>
            <Text style={styles.main}>Earn,Educate</Text>
          </View>
          <View style={styles.second}>
            <RNPickerSelect
              placeholder={placeholder}
              items={colleges}
              onValueChange={value => {
                this.setState({
                  collegeName: value,
                });
              }}
              style={pickerSelectStyles}
              value={this.state.collegeName}
            />
            <View style={{paddingTop: 60}}>
              <TextInput
                placeholder="Phone Number"
                style={styles.phone}
                placeholderTextColor="grey"
                keyboardType={'number-pad'}
                autoCorrect={false}
                enablesReturnKeyAutomatically
                value={this.state.phoneNo}
                onChangeText={text => this.setState({phoneNo: text})}
              />
            </View>
            <View style={{paddingTop: 30}}>
              <TextInput
                placeholder="Password"
                style={styles.password}
                placeholderTextColor="grey"
                keyboardType={'default'}
                autoCorrect={false}
                autoCapitalize={false}
                enablesReturnKeyAutomatically
                secureTextEntry
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
            </View>
            <View style={styles.forget}>
              <TouchableOpacity onPress={this.forgetPassword}>
                <Text style={{fontSize: 20, color: 'white'}}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <TouchableOpacity onPress={this.login}>
                <Image
                  style={styles.login}
                  source={require('../../assets/login_button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.second2}>
            <Text style={{color: 'white', fontSize: 20}}>
              Dont have an Account?
            </Text>
            <TouchableOpacity onPress={this.signup}>
              <Text style={{fontSize: 20, color: 'white'}}>Sign up!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  uptext: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  main: {
    fontSize: 50,
    color: '#FFFFFF',
    paddingLeft: 55,
  },
  second: {
    flex: 1.2,
    paddingTop: 50,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  second2: {
    flex: 0.4,
    paddingTop: 50,
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 70,
  },
  phone: {
    height: 40,
    width: '100%',
    fontSize: 30,
    paddingLeft: 40,
    color: 'white',
  },
  password: {
    height: 40,
    width: 300,
    fontSize: 30,
    paddingLeft: 40,
    color: 'white',
  },
  forget: {
    paddingTop: 30,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  login: {
    width: 130,
    height: 50,
    paddingTop: 20,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingLeft: 40,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
