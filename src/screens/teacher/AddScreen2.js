import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import RadioForm from 'react-native-simple-radio-button';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
import NotificationService from '../../services/notificationService';

var gender = [
  {label: 'Boys', value: 'male'},
  {label: 'Girls', value: 'female'},
  {label: 'Both', value: 'both'},
];

export default class AddScreen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      chosenDate: moment(),
      maxStudents: '',
      fees: '',
      venue1: '',
      venue2: '',
      genderPreference: 'male',
    };
    this.notification = new NotificationService();
  }

  //Permissions to use notifications
  handlePerm(perms) {
    Alert.alert('Permissions', JSON.stringify(perms));
  }

  submit = () => {
    if (
      this.state.chosenDate === '' ||
      this.state.maxStudents === '' ||
      this.state.venue1 === '' ||
      this.state.fees === ''
    ) {
      // Snackbar.show({
      //   text: 'Provide all details',
      //   duration: Snackbar.LENGTH_SHORT,
      //   backgroundColor: '#7785AC',
      // });
      return;
    }

    const data = {
      ...this.props.route.params,
      slotTime: this.state.chosenDate,
      maxStudents: this.state.maxStudents,
      venue1: this.state.venue1,
      venue2: this.state.venue2,
      fees: this.state.fees,
      genderPreference: this.state.genderPreference,
    };

    //api call to create slot
    console.log(data);
    //onSuccess
    this.notification.scheduleNotification(data.slotTime, data.topicName);
  };

  handlePicker = datetime => {
    this.setState({
      isVisible: false,
      //chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm'),
      chosenDate: datetime,
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
          source={require('../../assets/bg2.png')}
          style={styles.image}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Add more details</Text>
          </View>
          <ScrollView style={styles.mainView}>
            <View style={styles.dateTimeView}>
              <TouchableOpacity onPress={this.showPicker}>
                <Image source={require('../../assets/calendar-1.png')} />
              </TouchableOpacity>
              <Text style={styles.timeText}>
                {moment(this.state.chosenDate).format('MMMM, Do YYYY HH:mm A')}
              </Text>
              <DateTimePicker
                isVisible={this.state.isVisible}
                mode={'datetime'}
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
              />
            </View>

            <View style={styles.rowView}>
              <View style={styles.labelView}>
                <Text style={styles.labelText}>Maximum Students</Text>
              </View>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Quantity"
                  style={styles.input}
                  placeholderTextColor="#000000"
                  keyboardType={'number-pad'}
                  value={this.state.maxStudents}
                  onChangeText={text => this.setState({maxStudents: text})}
                />
              </View>
            </View>

            <View style={styles.rowView}>
              <View style={styles.labelView}>
                <Text style={styles.labelText}>Fees</Text>
              </View>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Fees.."
                  style={styles.input}
                  placeholderTextColor="#000000"
                  keyboardType={'number-pad'}
                  value={this.state.fees}
                  onChangeText={text => this.setState({fees: text})}
                />
              </View>
            </View>

            <View style={styles.rowView}>
              <View style={styles.labelView}>
                <Text style={styles.labelText}>Venue</Text>
              </View>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Room No."
                  style={styles.input}
                  placeholderTextColor="#000000"
                  value={this.state.venue1}
                  onChangeText={text => this.setState({venue1: text})}
                />
                <TextInput
                  placeholder="Hostel Name"
                  style={styles.input}
                  placeholderTextColor="#000000"
                  value={this.state.venue2}
                  onChangeText={text => this.setState({venue2: text})}
                />
              </View>
            </View>

            <View style={styles.rowView}>
              <View style={styles.labelView}>
                <Text style={styles.labelText}>Gender Preference</Text>
              </View>
              <View style={styles.inputView}>
                <RadioForm
                  radio_props={gender}
                  onPress={value => this.setState({genderPreference: value})}
                  buttonSize={15}
                  selectedButtonColor={'#131442'}
                  value={this.state.genderPreference}
                />
              </View>
            </View>

            <View style={styles.buttonView}>
              <TouchableOpacity onPress={this.submit}>
                <Image
                  style={styles.buttonImage}
                  resizeMode="contain"
                  source={require('../../assets/addslot.png')}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  header: {
    flex: 0.35,
    justifyContent: 'flex-end',
    paddingBottom: 0,
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'white',
    paddingBottom: 5,
  },
  mainView: {
    flex: 1,
    paddingHorizontal: 10,
  },
  dateTimeView: {
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 20,
  },
  timeText: {
    fontSize: 20,
    marginTop: 5,
  },
  rowView: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  labelView: {
    flex: 1,
    justifyContent: 'center',
  },
  inputView: {
    flex: 1,
  },
  labelText: {
    fontSize: 20,
  },
  input: {
    height: 50,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  buttonImage: {
    paddingHorizontal: 50,
    height: 50,
  },
});
