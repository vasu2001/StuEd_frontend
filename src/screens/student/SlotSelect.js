import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import SlotExpandableView from '../../components/SlotExpandableView';
import {ScrollView} from 'react-native-gesture-handler';

const SlotSelect = ({route, navigation}) => {
  const {teacherId, slotIds, topicName, teacherName} = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg2.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.image}>
        <View style={styles.header}>
          <View>
            <Text style={styles.topicName}>{topicName}</Text>
            <Text style={styles.teacherName}>by {teacherName}</Text>
          </View>
          <Text style={styles.headerText}>Select a Slot</Text>
        </View>
        <ScrollView style={styles.expandableListContainer}>
          <SlotExpandableView teacherId={teacherId} slotIds={slotIds} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    // width: null,
  },
  header: {
    flex: 0.35,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  expandableListContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'white',
    margin: 10,
  },
  topicName: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
  },
  teacherName: {
    color: 'grey',
    textAlign: 'center',
  },
});

export default SlotSelect;
