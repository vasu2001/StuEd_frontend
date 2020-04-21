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
          source={require('../assets/background.jpg')}
          style={styles.image}>
          <View style={{flex: 0.5}} />
          <View style={styles.pick}>
            <View style={{paddingTop: 15}}>
              <TextInput
                placeholder="+91"
                style={styles.phone}
                placeholderTextColor="#FFFFFF"
                keyboardType={'number-pad'}
              />
            </View>
            <View style={{flexDirection: 'row', paddingTop: 30}}>
              <View style={{paddingTop: 40, paddingLeft: 13}}>
                <TouchableOpacity>
                  <Image
                    style={styles.next}
                    source={require('../assets/send.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{paddingTop: 40, paddingLeft: 90}}>
                <TouchableOpacity>
                  <Image
                    style={styles.next}
                    source={require('../assets/resend.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingTop: 70}}>
              <TextInput
                placeholder="Enter OTP"
                style={styles.password}
                placeholderTextColor="#FFFFFF"
                keyboardType={'number-pad'}
              />
            </View>
            <View style={{alignItems: 'center', paddingTop: 80}}>
              <TouchableOpacity>
                <Image
                  style={styles.next}
                  source={require('../assets/verify.png')}
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
    width: 150,
    height: 50,
    paddingTop: 20,
  },
  pick: {
    flex: 1,
  },
});

//   inputAndroid: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
