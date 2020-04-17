import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TopicListItem = ({topicName, subjectName, navigation, teacherUI}) => {
  const route = teacherUI
    ? ['CreateSlot', {topicName, subjectName}]
    : ['Teacher', {topicName}];
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(...route)}
      style={styles.mainView}>
      <Image source={require('../assets/book.png')} style={styles.image} />
      <Text style={styles.text}>{topicName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 30,
  },
  text: {
    fontSize: 30,
    flex: 1,
  },
});

export default TopicListItem;
