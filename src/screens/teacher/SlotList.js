import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SlotListItem from '../../components/SlotListItem';

const data = [
  {
    slotId: 'ashfjf-ahd-sad',
    subject: 'maths',
    topicName: 'geometry',
    slotTime: '12:34:57',
    validated: '-1',
    status: 'upcoming',
    maxStudents: '10',
    currentStudents: '5',
  },
  {
    slotId: 'ashfjf-fdsd-sad',
    subject: 'maths',
    topicName: 'geometry',
    slotTime: '12:34:57',
    validated: '0',
    status: 'past',
  },
];

const SlotList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{resizeMode: 'stretch'}}
        source={require('../../assets/bg2.png')}
        style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Slots</Text>
        </View>

        <FlatList
          style={styles.list}
          data={data}
          renderItem={({item}) => (
            <SlotListItem
              slotId={item.slotId}
              data={item}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.slotId}
        />
      </ImageBackground>
    </View>
  );
};

export default SlotList;

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
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'white',
  },
  list: {
    flex: 1,
    paddingTop: 5,
  },
});
