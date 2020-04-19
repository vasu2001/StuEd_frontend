import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Button from './Button';

const verifyOTP = (OTP, callback) => () => {
  //api call to check
  callback();
};

const StudentListItem = ({data, verifySuccess, isOTP}) => {
  const [OTP, setOTP] = useState('');

  return (
    <View style={styles.mainView}>
      <View style={styles.infoColumn}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.phoneNo}>{data.phoneNo}</Text>
      </View>
      {isOTP && (
        <View style={styles.otpColumn}>
          <TextInput
            style={styles.input}
            placeholder="OTP.."
            onChangeText={text => setOTP(text)}
            defaultValue={OTP}
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={4}
          />
          <Button labelText="Verify" callback={verifyOTP(OTP, verifySuccess)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
    marginBottom: 5,
    borderRadius: 20,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 5,
  },
  phoneNo: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#EBE9E9',
  },
  otpColumn: {
    justifyContent: 'center',
  },
});

export default StudentListItem;
