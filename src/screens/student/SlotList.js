import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SlotListItem from '../../components/SlotListItem';

const data = {
  'ashfjf-ahd-sad': {
    OTP: '5655',
    paymentId: 'sdsda-sads-sdffwr',
    teacherId: '1234565678900',
    subject: 'maths',
    topicName: 'geometry',
    slotTime: '12:34:57',
  },
  'ashfjf-fdsd-sad': {
    OTP: '-1',
    paymentId: 'sdsda-sads-sdffwr',
    teacherId: '1234565678900',
    subject: 'maths',
    topicName: 'geometry',
    slotTime: '12:34:57',
  },
};

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
          data={Object.keys(data).map(slotId => ({key: slotId}))}
          renderItem={({item}) => (
            <SlotListItem
              slotId={item.key}
              data={data[item.key]}
              navigation={navigation}
            />
          )}
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
