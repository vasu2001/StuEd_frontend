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

export default class signup3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{resizeMode: 'stretch'}}
          source={require('../../assets/background.jpg')}
          style={styles.image}>
          <View style={{flex: 0.3}} />
          <View style={styles.pick}>
            <View style={{paddingTop: 15}}>
              <TextInput
                placeholder="Enter Your Phone Number"
                style={styles.phone}
                placeholderTextColor="#FFFFFF"
                keyboardType={'number-pad'}
              />
            </View>

            <View style={{alignItems: 'center', paddingTop: 80}}>
              <TouchableOpacity>
                <Image
                  style={styles.next}
                  source={require('../../assets/reset.png')}
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

  next: {
    width: 194,
    height: 97,
    paddingTop: 20,
  },
  pick: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
