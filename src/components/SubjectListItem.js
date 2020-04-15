import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SubjectListItem = ({subjectName, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.mainView}
      onPress={() => navigation.navigate('Topic', {subjectName})}>
      <Image source={require('../assets/book.png')} style={styles.image} />
      <Text style={styles.text}>{subjectName}</Text>
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

export default SubjectListItem;
