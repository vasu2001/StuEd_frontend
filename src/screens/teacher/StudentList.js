import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import StudentListItem from '../../components/StudentListItem';

const StudentList = ({route}) => {
  const {isOTP, slotId} = route.params;
  const raw_data = [
    {
      userId: 'sfgds6sdhs7sgbfassbs',
      name: 'vasu',
      phoneNo: '+243456789369',
      validated: false,
    },
    {
      userId: 'sfgds646sdhs7sgbfassbs',
      name: 'vasu3',
      phoneNo: '124345',
      validated: false,
    },
    {
      userId: 'sfgds6sdhs7s0o9gbfassbs',
      name: 'vasu8',
      phoneNo: '124345',
      validated: false,
    },
    {
      userId: 'sfgds6s23dhs7sgbfassbs',
      name: 'vasu1',
      phoneNo: '124345',
      validated: false,
    },
  ];

  const [data, setData] = useState(raw_data);

  const OTPverifed = userId => () => {
    setData(
      data.map(item =>
        item.userId === userId ? {...item, validated: true} : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{resizeMode: 'stretch'}}
        source={require('../../assets/bg2.png')}
        style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Students</Text>
        </View>
        <FlatList
          style={styles.list}
          data={data.filter(item => !item.validated)}
          keyExtractor={item => item.userId}
          renderItem={({item, index}) => (
            <StudentListItem
              data={item}
              verifySuccess={OTPverifed(item.userId)}
              isOTP={isOTP}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default StudentList;

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
