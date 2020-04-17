import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
  Button,
  TextInput,
} from 'react-native';
//import { color } from "react-native-reanimated";
//import { startAsync } from "expo/build/AR";
//import { Dialog } from "react-native-dialog";

export default class SettingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    styles = this.styles;
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{resizeMode: 'stretch'}}
          source={require('../../assets/bg2.png')}
          style={styles.image}>
          <Text style={styles.text}>Settings</Text>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({show: true});
              }}>
              <Image
                style={styles.userimage}
                source={require('../../assets/latestusername.png')}
              />
            </TouchableOpacity>
          </View>
          <Modal transparent={true} visible={this.state.show}>
            <View style={styles.modaldesign}>
              <TextInput
                placeholder="Enter new Username"
                style={styles.modalfield}
                placeholderTextColor="#7A898B"
                keyboardType={'default'}
                underlineColorAndroid={'black'}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: -10,
                }}>
                <View style={{marginLeft: 70}}>
                  <Button
                    title="Close"
                    onPress={() => {
                      this.setState({
                        show: false,
                      });
                    }}
                  />
                </View>
                <View style={{marginLeft: 90}}>
                  <Button title="Save" />
                </View>
              </View>
            </View>
          </Modal>
          <View style={{flex: 1}}>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.phonenum}
                source={require('../../assets/latestphone.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Linking.openURL('https://stuedstartup.wordpress.com/faqs/');
              }}>
              <Image
                style={styles.help}
                source={require('../../assets/help.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Linking.openURL(
                  'https://stuedstartup.wordpress.com/terms-and-conditons/',
                );
              }}>
              <Image
                style={styles.terms}
                source={require('../../assets/latestterms.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Linking.openURL('https://stuedstartup.wordpress.com/about/');
              }}>
              <Image
                style={styles.contact}
                source={require('../../assets/latestcontact.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.logout}
                source={require('../../assets/logout.png')}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }

  styles = StyleSheet.create({
    containerx: {
      flex: 3,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    text: {
      color: 'white',
      fontSize: 33,
      marginLeft: 31,
      marginTop: 160,
      textShadowColor: 'white',
      letterSpacing: 1,
    },
    button: {
      margin: 40,
    },
    userimage: {
      height: 55,
      width: 500,
      marginTop: 20,
      marginHorizontal: -55,
    },
    phonenum: {
      height: 55,
      width: 500,
      marginHorizontal: -55,
      marginVertical: -55,
    },
    help: {
      height: 55,
      width: 500,
      marginHorizontal: -55,
      marginVertical: -45,
    },
    terms: {
      height: 55,
      width: 500,
      marginHorizontal: -55,
      marginVertical: -35,
    },
    contact: {
      height: 55,
      width: 500,
      marginHorizontal: -55,
      marginVertical: -30,
    },
    logout: {
      height: 55,
      width: 500,
      marginHorizontal: -55,
      marginVertical: -30,
    },
    modaldesign: {
      backgroundColor: '#ffffff',
      marginHorizontal: 200,
      marginVertical: 400,
      height: 150,
      width: 300,
      alignSelf: 'center',
      borderRadius: 20,
      borderColor: '#000000',
      borderWidth: 1,
    },
    modalfield: {
      marginTop: 20,
      height: 100,
      fontSize: 30,
    },
    placeholder: {
      color: '#000000',
    },
  });
}
