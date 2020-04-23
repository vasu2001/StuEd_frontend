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
      collegen: undefined,
      collegena: undefined,
    };
  }

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
          <View style={{flex: 0.4}} />
          <View style={styles.pick}>
            <RNPickerSelect
              placeholder={placeholder}
              items={college}
              useNativeAndroidPickerStyle={false}
              onValueChange={value => {
                this.setState({
                  collegen: value,
                });
              }}
              style={pickerSelectStyles}
              value={this.state.collegen}
            />
            <View style={{paddingTop: 40}}>
              <TextInput
                placeholder="Full Name"
                style={styles.phone}
                placeholderTextColor="#FFFFFF"
                keyboardType={'default'}
              />
            </View>
            <View style={{paddingTop: 40}}>
              <TextInput
                placeholder="Phone Number"
                style={styles.phone}
                placeholderTextColor="#FFFFFF"
                keyboardType={'default'}
              />
            </View>
            <View style={{paddingTop: 40}}>
              <TextInput
                placeholder="Password"
                style={styles.password}
                placeholderTextColor="#FFFFFF"
                keyboardType={'default'}
              />
            </View>
            <View style={{paddingTop: 40}}>
              <TextInput
                placeholder="Retype Password"
                style={styles.password}
                placeholderTextColor="#FFFFFF"
                keyboardType={'default'}
              />
            </View>

            <View style={{alignItems: 'center', paddingTop: 80}}>
              <TouchableOpacity>
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
  next: {
    width: 130,
    height: 50,
    paddingTop: 20,
  },
  pick: {
    flex: 1,
    justifyContent: 'space-around',
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
