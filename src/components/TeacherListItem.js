import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TeacherListItem = ({data, navigation, teacherId, topicName}) => {
  return (
    <TouchableOpacity
      style={styles.mainView}
      onPress={() => {
        navigation.navigate('SlotDetails', {
          teacherId,
          slotIds: data.slotIds,
          topicName,
          teacherName: data.teacherName,
        });
      }}>
      <Image
        source={require('../assets/usermaleicon.png')}
        style={styles.profile}
      />
      <View style={styles.secondaryView}>
        <Text style={styles.name}>{data.teacherName}</Text>
        <Text style={styles.rating}>
          {`${data.rating / data.noOfRating} (${data.noOfRating})`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 20,
    margin: 10,
  },
  secondaryView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    color: 'black',
  },
  rating: {
    alignSelf: 'flex-end',
    fontSize: 18,
    color: 'grey',
  },
});

export default TeacherListItem;
