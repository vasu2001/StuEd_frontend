import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({labelText, callback}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.touchArea} onPress={callback}>
        <Text style={styles.text}>{labelText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: 10,
  },
  touchArea: {
    flex: 1,
    borderRadius: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#CCD7E4',
  },
  text: {
    color: '#000000',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
});

export default Button;
