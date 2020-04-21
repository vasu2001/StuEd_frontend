import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SlotDetailListItem from '../../components/SlotDetailListItem';
import Button from '../../components/Button';

const startSlot = (data, setData, setDataRoot) => () => {
  setData({...data, validated: '0'});
  setDataRoot({...data, validated: '0'});
};

const endSlot = (data, setData, setDataRoot) => () => {
  setData({...data, status: 'past'});
  setDataRoot({...data, status: 'past'});
};

const studentList = (navigation, isOTP, slotId) => () => {
  navigation.navigate('StudentList', {isOTP, slotId});
};

const SlotDetail = ({route, navigation}) => {
  const {slotId} = route.params;

  //data=> subject,topicname,slottime,status,validated,currentstudents,maxstudents
  const [data, setData] = useState(route.params.data);

  //api call to fetch data
  const [detailData, setDetailData] = useState({
    slotId,
    fees: 100,
    venue1: 'room no 123',
    venue2: 'h3 hostel',
    genderPreference: 'Both',
    topicDesc:
      'Non sint fugiat ea consequat mollit sunt occaecat dolore esse consequat deserunt.',
    estMarks: 12,
    estTime: '1 hour',
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{resizeMode: 'stretch'}}
        source={require('../../assets/bg2.png')}
        style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Slot Details</Text>
        </View>
        <ScrollView style={styles.list}>
          <SlotDetailListItem labelText="Subject" dataText={data.subject} />
          <SlotDetailListItem labelText="Topic" dataText={data.topicName} />
          <SlotDetailListItem
            labelText="Topic Description"
            dataText={detailData.topicDesc}
          />
          <SlotDetailListItem labelText="Slot Time" dataText={data.slotTime} />
          <SlotDetailListItem
            labelText="Venue"
            dataText={detailData.venue1 + ' , ' + detailData.venue2}
          />

          <SlotDetailListItem
            labelText="Gender Preference"
            dataText={detailData.genderPreference}
          />
          <SlotDetailListItem
            labelText="Fees"
            dataText={'Rs. ' + detailData.fees}
          />

          {data.status === 'upcoming' ? (
            <>
              <SlotDetailListItem
                labelText="Estimated Marks"
                dataText={detailData.estMarks}
              />
              <SlotDetailListItem
                labelText="Estimated Time"
                dataText={detailData.estTime}
              />
              <SlotDetailListItem
                labelText="Booked Slots"
                dataText={data.currentStudents}
              />
              <SlotDetailListItem
                labelText="Total Slots"
                dataText={data.maxStudents}
              />
              {data.validated === '-1' ? (
                <View style={styles.footer}>
                  <Button
                    labelText="Start Slot"
                    callback={startSlot(data, setData, route.params.setData)}
                  />
                  <Button
                    labelText="Students"
                    callback={studentList(navigation, false, slotId)}
                  />
                </View>
              ) : (
                <View style={styles.footer}>
                  <Button
                    labelText="End Slot"
                    callback={endSlot(data, setData, route.params.setData)}
                  />
                  <Button
                    labelText="Verify OTPs"
                    callback={studentList(navigation, true, slotId)}
                  />
                </View>
              )}
            </>
          ) : (
            <SlotDetailListItem
              labelText="Students Taught"
              dataText={data.validated}
            />
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SlotDetail;

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
  },
  footer: {
    marginHorizontal: 10,
    marginBottom: 5,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
