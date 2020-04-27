import React, {Component, useState} from 'react';
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
import Snackbar from 'react-native-snackbar';

const college = [
  {
    label: 'Jaypee',
    value: 'Jaypee',
  },
  {
    label: 'Amity',
    value: 'Amity',
  },
];

export default class signup1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collegeName: undefined,
      name: '',
      phoneNo: '',
      password1: '',
      password2: '',
    };
  }

  next = () => {
    if (this.state.collegeName === undefined) {
      Snackbar.show({
        text: 'Select a college',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#50C9CE',
      });
    } else if (this.state.name === '') {
      Snackbar.show({
        text: 'Enter a name',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#50C9CE',
      });
    } else if (this.state.phoneNo.length !== 10) {
      Snackbar.show({
        text: 'Enter a valid Phone No',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#50C9CE',
      });
    } else if (this.state.password1.length < 8) {
      Snackbar.show({
        text: 'Enter a valid password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#50C9CE',
      });
    } else if (this.state.password1 !== this.state.password2) {
      Snackbar.show({
        text: 'Passwords donot match',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#50C9CE',
      });
    } else {
      //api call
      this.props.navigation.navigate('Verify OTP');
    }
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
          <View style={styles.pick}>
            <RNPickerSelect
              placeholder={placeholder}
              items={college}
              useNativeAndroidPickerStyle={false}
              onValueChange={value => {
                this.setState({
                  collegeName: value,
                });
              }}
              style={pickerSelectStyles}
              value={this.state.collegeName}
            />
            <View style={{paddingTop: 30}}>
              <TextInput
                placeholder="Full Name"
                style={styles.phone}
                placeholderTextColor="#9EA0A4"
                keyboardType={'default'}
                autoCorrect={false}
                value={this.state.name}
                onChangeText={text => this.setState({name: text})}
              />
            </View>
            <View style={{paddingTop: 30}}>
              <TextInput
                placeholder="Phone Number"
                style={styles.phone}
                placeholderTextColor="#9EA0A4"
                keyboardType={'default'}
                autoCorrect={false}
                value={this.state.phone}
                onChangeText={text => this.setState({phoneNo: text})}
              />
            </View>
            <View style={{paddingTop: 30}}>
              <TextInput
                placeholder="Password"
                style={styles.password}
                placeholderTextColor="#9EA0A4"
                keyboardType={'default'}
                autoCorrect={false}
                autoCapitalize={false}
                enablesReturnKeyAutomatically
                secureTextEntry
                value={this.state.password1}
                onChangeText={text => this.setState({password1: text})}
              />
            </View>
            <View style={{paddingTop: 30}}>
              <TextInput
                placeholder="Retype Password"
                style={styles.password}
                placeholderTextColor="#9EA0A4"
                keyboardType={'default'}
                autoCorrect={false}
                autoCapitalize={false}
                enablesReturnKeyAutomatically
                secureTextEntry
                value={this.state.password2}
                onChangeText={text => this.setState({password2: text})}
              />
            </View>

            <View style={{alignItems: 'center', paddingTop: 30}}>
              <TouchableOpacity onPress={this.next}>
                <Image
                  style={styles.next}
                  source={require('../../assets/next_button.png')}
                />
              </TouchableOpacity>
            </View>
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

  phone: {
    height: 60,
    width: '100%',
    fontSize: 30,
    paddingLeft: 40,
    color: 'white',
  },
  password: {
    height: 60,
    width: '100%',
    fontSize: 30,
    paddingLeft: 40,
    color: 'white',
  },

  next: {
    width: 130,
    height: 50,
  },
  pick: {
    flex: 1,
    paddingTop: 250,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 30,
    paddingLeft: 40,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
