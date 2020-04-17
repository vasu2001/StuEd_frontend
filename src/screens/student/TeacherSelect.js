import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import TeacherListItem from '../../components/TeacherListItem';

const TeacherSelect = ({navigation, route}) => {
  const teacherData = {
    'asdda-asd-sdaaa': {
      slotIds: [
        {
          slotId: 'asafdgfusgasfi',
          slotTime: '12:00:33',
          started: false,
          currentStudents: 5,
          maxStudents: 10,
        },
        {
          slotId: 'sfasgfsdgsdgdfdas',
          slotTime: '12:00:45',
          started: true,
          currentStudents: 5,
          maxStudents: 10,
        },
      ],
      teacherName: 'Vasu Aggarwal',
      rating: 120,
      noOfRating: 25,
    },
  }; //server data

  return (
    <ImageBackground
      source={require('../../assets/bg3.png')}
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.background}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Available Teachers</Text>
      </View>
      <FlatList
        data={Object.keys(teacherData).map(item => ({key: item}))}
        renderItem={({item}) => (
          <TeacherListItem
            data={teacherData[item.key]}
            navigation={navigation}
            teacherId={item.key}
            topicName={route.params.topicName}
          />
        )}
        style={styles.list}
      />
    </ImageBackground>
  );
};

export default TeacherSelect;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  label: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  labelContainer: {
    flex: 0.35,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  list: {
    flex: 1,
    margin: 10,
    marginBottom: 0,
    marginLeft: 20,
  },
});
