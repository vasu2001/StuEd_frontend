import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import StateContext from '../../context/StateContext';
import ConfirmDialog from '../../components/ConfirmDialog';
import InputDialog from '../../components/InputDialog';

export default class SettingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      showUserDialog: false,
      showLogoutDialog: false,
      showPhoneDialog: false,
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
                  this.setState({showUserDialog: true});
                }}>
                <Image
                  style={styles.userimage}
                  source={require('../../assets/latestusername.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({showPhoneDialog: true});
                }}>
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
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({showLogoutDialog: true})}>
                <Image
                  style={styles.logout}
                  source={require('../../assets/logout.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* change username dialog */}
        <InputDialog
          text="Enter new Username"
          inputType="default"
          visible={this.state.showUserDialog}
          cancel={() => this.setState({showUserDialog: false})}
          callback={text => {}}
          validator={text => true}
        />

        {/* change phoneno dialog */}
        <InputDialog
          text="Enter new PhoneNo"
          inputType="number-pad"
          visible={this.state.showPhoneDialog}
          cancel={() => this.setState({showPhoneDialog: false})}
          callback={text => {}}
          validator={text => text.length === 10}
        />

        {/* logout confirm dialog */}
        <ConfirmDialog
          visible={this.state.showLogoutDialog}
          callback={this.signout}
          cancel={() => this.setState({showLogoutDialog: false})}
          text="Do you want to logout?"
        />
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
    dialogText: {
      fontSize: 25,
      margin: 10,
      paddingBottom: 10,
    },
  });
}
