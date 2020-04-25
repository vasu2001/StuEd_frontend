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

export default class signup2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{resizeMode: 'stretch'}}
          source={require('../../assets/background.jpg')}
          style={styles.image}>
          <View style={styles.pick}>
            <View>
              <TextInput
                placeholder="+91"
                style={styles.phone}
                placeholderTextColor="#FFFFFF"
                keyboardType={'number-pad'}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingTop: 30, paddingLeft: 25}}>
                <TouchableOpacity>
                  <Image
                    style={styles.next}
                    source={require('../../assets/send.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{paddingTop: 30, paddingLeft: 70}}>
                <TouchableOpacity>
                  <Image
                    style={styles.next}
                    source={require('../../assets/resend.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TextInput
                placeholder="Enter OTP"
                style={styles.password}
                placeholderTextColor="#FFFFFF"
                keyboardType={'number-pad'}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <Image
                  style={styles.next}
                  source={require('../../assets/verify.png')}
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

  next: {
    width: 150,
    height: 50,
    paddingTop: 20,
  },
  pick: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 250,
  },
});

//   inputAndroid: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
