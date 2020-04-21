import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddTopicButton = () => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity>
        <Text style={styles.text}>Add a topic</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTopicButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
  },
});
