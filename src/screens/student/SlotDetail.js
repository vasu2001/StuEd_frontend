import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SlotDetailListItem from '../../components/SlotDetailListItem';
import {Rating} from 'react-native-elements';

const SlotDetail = ({route, navigation}) => {
  const {slotId, data} = route.params;
  //data=> otp,paymnetid,teacherid,subject,topicname,slottime

  const [rating, setRating] = useState(data.OTP);
  //console.log('rendered');

  const submitRating = userRating => {
    //api call to submit review
    setRating(userRating.toString());
    //console.log('submitting ' + rating);
  };

  //api call to fetch data
  const detailData = {
    slotId,
    fees: 100,
    venue1: 'room no 123',
    venue2: 'h3 hostel',
    genderPreference: 'Both',
    topicDesc:
      'Non sint fugiat ea consequat mollit sunt occaecat dolore esse consequat deserunt.',
    estMarks: 12,
    estTime: '1 hour',
    phoneNo: '+917485637593',
    teacherName: 'rahul',
  };

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
            labelText="TopicDesc"
            dataText={detailData.topicDesc}
          />
          <SlotDetailListItem
            labelText="Teacher's Name"
            dataText={detailData.teacherName}
          />
          <SlotDetailListItem
            labelText="Teacher's Ph. No."
            dataText={detailData.phoneNo}
          />
          <SlotDetailListItem labelText="Slot Time" dataText={data.slotTime} />
          <SlotDetailListItem
            labelText="Venue"
            dataText={detailData.venue1 + ' , ' + detailData.venue2}
          />
          <SlotDetailListItem
            labelText="Estimated Time"
            dataText={detailData.estTime}
          />
          <SlotDetailListItem
            labelText="Estimated Marks"
            dataText={detailData.estMarks}
          />
          <SlotDetailListItem
            labelText="Gender Preference"
            dataText={detailData.genderPreference}
          />
          <SlotDetailListItem
            labelText="Fees"
            dataText={'Rs. ' + detailData.fees}
          />
          <SlotDetailListItem
            labelText="Payment Id"
            dataText={data.paymentId}
          />
          {rating.length === 4 ? (
            <SlotDetailListItem labelText="OTP" dataText={data.OTP} />
          ) : rating.length === 2 ? (
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingLabel}>
                Tell us how was your experience...
              </Text>
              <Rating
                showRating
                onFinishRating={submitRating}
                style={styles.ratingBar}
                showReadOnlyText={false}
                ratingTextColor="#7785AC"
                startingValue={0}
              />
            </View>
          ) : (
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingLabel}>
                Thank you for your feedback
              </Text>
              <Rating
                showRating
                readonly
                style={styles.ratingBar}
                showReadOnlyText={false}
                ratingTextColor="#7785AC"
                startingValue={rating}
              />
            </View>
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
  ratingContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 10,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 5,
  },
  ratingLabel: {
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    paddingBottom: 0,
  },
  ratingBar: {
    alignSelf: 'center',
    paddingBottom: 10,
  },
});
