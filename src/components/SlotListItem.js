import React, {useContext} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StateContext from '../context/StateContext';

const SlotListItem = ({slotId, data, navigation}) => {
  const {teacherUI} = useContext(StateContext).data;
  const imageSource = teacherUI
    ? data.upcoming === 'upcoming'
      ? require('../assets/upcomingslot.png')
      : require('../assets/pastslot.png')
    : data.OTP.length === 4
    ? require('../assets/upcomingslot.png')
    : require('../assets/pastslot.png');
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={styles.mainArea}
        onPress={() => navigation.navigate('Details', {slotId, data})}>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
        <View style={styles.emptyView} />
        <View style={styles.tableView}>
          <View style={styles.rowView}>
            <Text style={styles.labelText}>Date</Text>
            <Text style={styles.dataText}>{data.slotTime}</Text>
          </View>

          <View style={styles.rowView}>
            <Text style={styles.labelText}>Time</Text>
            <Text style={styles.dataText}>{data.slotTime}</Text>
          </View>

          <View style={styles.rowView}>
            <Text style={styles.labelText}>Subject</Text>
            <Text style={styles.dataText}>{data.subject}</Text>
          </View>

          <View style={styles.rowView}>
            <Text style={styles.labelText}>Topic</Text>
            <Text style={styles.dataText}>{data.topicName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  mainArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 4,
  },
  tableView: {
    flexDirection: 'column',
    flex: 10,
  },
  rowView: {
    flexDirection: 'row',
  },
  labelText: {
    color: 'grey',
    flex: 1,
    fontSize: 20,
  },
  dataText: {
    fontSize: 20,
    flex: 1.5,
  },
  emptyView: {
    flex: 1.5,
  },
});

export default SlotListItem;
