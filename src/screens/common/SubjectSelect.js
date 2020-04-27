import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SubjectListItem from '../../components/SubjectListItem';
import RNPickerSelect from 'react-native-picker-select';

const SubjectSelect = ({navigation}) => {
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const totalSem = 8;
  const subjectList = ['maths', 'english'];
  const semesterPlaceholder = {
    label: 'Semester',
    value: null,
    color: '#9EA0A4',
  };
  const branchPlaceholder = {
    label: 'Branch',
    value: null,
    color: '#9EA0A4',
  };
  const branches = [{value: 'CSE', label: 'CSE'}, {value: 'ECE', label: 'ECE'}];

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{resizeMode: 'stretch'}}
        source={require('../../assets/bg2.png')}
        style={styles.image}>
        <View style={styles.dropdownDiv}>
          {/* branch selector dropdown */}
          <View style={styles.dropdownContainer}>
            <Text style={styles.labelText}>Branch</Text>
            <RNPickerSelect
              placeholder={branchPlaceholder}
              items={branches}
              useNativeAndroidPickerStyle={false}
              onValueChange={value => setBranch(value)}
              style={dropdownStyle}
              value={branch}
            />
          </View>
          {/* semester selector dropdown */}
          <View style={styles.dropdownContainer}>
            <Text style={styles.labelText}>Semester</Text>
            <RNPickerSelect
              placeholder={semesterPlaceholder}
              items={Array.from({length: totalSem}, (x, i) =>
                (i + 1).toString(),
              ).map(item => ({label: item, value: item}))}
              useNativeAndroidPickerStyle={false}
              onValueChange={value => setSemester(value)}
              style={dropdownStyle}
              value={semester}
            />
          </View>
        </View>
        {/* subject list */}
        <FlatList
          data={subjectList.map(item => ({key: item}))}
          renderItem={({item}) => (
            <SubjectListItem subjectName={item.key} navigation={navigation} />
          )}
          style={styles.subjectList}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </View>
  );
};

export default SubjectSelect;

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
  dropdownDiv: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flex: 0.35,
  },
  dropdownContainer: {
    flex: 0.7,
    justifyContent: 'space-around',
  },
  // dropdown: {
  //   backgroundColor: 'white',
  //   margin: 35,
  //   marginTop: 2,
  //   marginBottom: 20,
  // },
  subjectList: {
    flex: 0.65,
    marginTop: 20,
    padding: 10,
  },
  listItem: {
    fontSize: 30,
  },
  labelText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

const dropdownStyle = StyleSheet.create({
  inputAndroid: {
    backgroundColor: 'white',
    margin: 35,
    marginTop: 2,
    marginBottom: 20,
    color: '#000000',
  },
  inputIOS: {
    backgroundColor: 'white',
    margin: 35,
    marginTop: 2,
    marginBottom: 20,
    color: '#000000',
    paddingVertical: 10,
  },
});
