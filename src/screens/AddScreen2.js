import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
var gender = [
  {label: 'Boys', value: 0},
  {label: 'Girls', value: 1},
  {label: 'Both', value: 2},
];

export default class AddScreen2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      chosenDate: '',
    };
  }
  handlePicker = datetime => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm'),
    });
  };
  showPicker = () => {
    this.setState({
      isVisible: true,
    });
  };
  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{resizeMode: 'stretch'}}
          source={require('../assets/bg2.png')}
          style={styles.image}>
          <View
            style={{
              flex: 1.1,
              justifyContent: 'flex-end',
              flexDirection: 'column',
              paddingTop: 40,
              paddingLeft: 40,
            }}>
            <TouchableOpacity onPress={this.showPicker}>
              <Image
                style={{height: 100, width: 300}}
                source={require('../assets/calendar-1.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                paddingLeft: 60,
              }}>
              {this.state.chosenDate}
            </Text>
            <DateTimePicker
              isVisible={this.state.isVisible}
              mode={'datetime'}
              onConfirm={this.handlePicker}
              onCancel={this.hidePicker}
            />
          </View>

          <View style={{flex: 1.2, paddingBottom: 80, paddingTop: 50}}>
            <View
              style={{
                flex: 0.2,
                paddingLeft: 20,
                flexDirection: 'row',
                paddingBottom: 20,
              }}>
              <View style={{flex: 1, paddingTop: 15}}>
                <Text style={{fontSize: 20, color: 'black'}}>
                  Maximum Students
                </Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Quantity"
                  style={{height: 45, width: 100}}
                  placeholderTextColor="#000000"
                  keyboardType={'number-pad'}
                />
              </View>
            </View>
            <View
              style={{
                flex: 0.2,
                paddingLeft: 20,
                flexDirection: 'row',
                paddingBottom: 20,
              }}>
              <View style={{flex: 1, paddingTop: 15}}>
                <Text style={{fontSize: 20, color: 'black'}}>Fees</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Fees"
                  style={{height: 45, width: 100}}
                  placeholderTextColor="#000000"
                  keyboardType={'number-pad'}
                />
              </View>
            </View>
            <View
              style={{
                flex: 0.4,
                paddingLeft: 20,
                flexDirection: 'row',
                paddingBottom: 50,
                justifyContent: 'flex-start',
              }}>
              <View style={{flex: 1, paddingTop: 15}}>
                <Text style={{fontSize: 20, color: 'black'}}>Venue</Text>
              </View>
              <View style={{paddingRight: 50}}>
                <View style={{flex: 1}}>
                  <TextInput
                    placeholder="Room No"
                    style={{height: 45, width: 100}}
                    placeholderTextColor="#000000"
                    keyboardType={'number-pad'}
                  />
                </View>
                <View style={{flex: 1, paddingTop: 40, paddingBottom: 10}}>
                  <TextInput
                    placeholder="Hostel Name"
                    style={{height: 45, width: 150}}
                    placeholderTextColor="#000000"
                    keyboardType={'default'}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 0.4,
                paddingLeft: 20,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 20, color: 'black', paddingRight: 20}}>
                Interested in Teaching
              </Text>
              <RadioForm
                radio_props={gender}
                onPress={value => {}}
                buttonSize={15}
                selectedButtonColor={'#131442'}
              />
            </View>
            <View
              style={{
                flex: 0.005,
                paddingLeft: 100,
                alignItems: 'flex-end',
                paddingRight: 110,
                paddingTop: 40,
              }}>
              <TouchableOpacity>
                <Image
                  style={{height: 52, width: 180}}
                  source={require('../assets/addslot.png')}
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
});
