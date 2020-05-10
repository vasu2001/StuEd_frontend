import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
  Button,
  TextInput,
} from 'react-native';
import StateContext from '../../context/StateContext';
import DialogContainer from '../../containers/DialogContainer';

export default class SettingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  static contextType = StateContext;

  signout = () => {
    this.context.toggleSignin();
  };

  render() {
    styles = this.styles;
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{resizeMode: 'stretch'}}
          source={require('../../assets/bg2.png')}
          style={styles.image}>
          <View
            style={{
              flex: 0.7,
              justifyContent: 'flex-end',
              paddingLeft: 30,
              paddingBottom: 3,
            }}>
            <Text style={styles.text}>Settings</Text>
          </View>
          <View
            style={{
              flex: 2,
              paddingTop: 20,
            }}>
            <View style={{flex: 1}}>
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
            <DialogContainer
              visible={this.state.show}
              cancel={() => this.setState({show: false})}>
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
                  justifyContent: 'space-around',
                }}>
                <Button
                  title="Close"
                  onPress={() => {
                    this.setState({
                      show: false,
                    });
                  }}
                />
                <Button title="Save" />
              </View>
            </DialogContainer>
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
              <TouchableOpacity style={styles.button} onPress={this.signout}>
                <Image
                  style={styles.logout}
                  source={require('../../assets/logout.png')}
                />
              </TouchableOpacity>
            </View>
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
      textShadowColor: 'white',
      letterSpacing: 1,
    },
    button: {},
    userimage: {
      height: 55,
      width: 500,
    },
    phonenum: {
      height: 55,
      width: 500,
    },
    help: {
      height: 55,
      width: 500,
    },
    terms: {
      height: 55,
      width: 500,
    },
    contact: {
      height: 55,
      width: 500,
    },
    logout: {
      height: 55,
      width: 500,
    },
    modalfield: {
      margin: 10,
      fontSize: 30,
    },
    placeholder: {
      color: '#000000',
    },
  });
}
