import React, {useState} from 'react';
import {View, Text, StyleSheet, Picker, ImageBackground} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SubjectListItem from '../components/SubjectListItem';

const SubjectSelect = ({navigation}) => {
  const [branch, setBranch] = useState('CSE');
  const [semester, setSemester] = useState('1');
  const branches = ['CSE', 'ECE'];
  const totalSem = 8;
  const subjectList = ['maths', 'english'];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        style={styles.image}>
        <View style={styles.dropdownDiv}>
          {/* branch selector dropdown */}
          <View style={styles.dropdownContainer}>
            <Text style={styles.labelText}>Branch</Text>
            <Picker
              selectedValue={branch}
              onValueChange={(itemValue, itemIndex) => setBranch(itemValue)}
              style={styles.dropdown}>
              {branches.map(item => (
                <Picker.Item label={item} value={item} key={item} />
              ))}
            </Picker>
          </View>
          {/* semester selector dropdown */}
          <View style={styles.dropdownContainer}>
            <Text style={styles.labelText}>Semester</Text>
            <Picker
              selectedValue={semester}
              onValueChange={(itemValue, itemIndex) => setSemester(itemValue)}
              style={styles.dropdown}>
              {Array.from({length: totalSem}, (x, i) => i + 1).map(item => (
                <Picker.Item
                  label={item.toString()}
                  value={item.toString()}
                  key={item.toString()}
                />
              ))}
            </Picker>
          </View>
        </View>
        {/* subject list */}
        <FlatList
          data={subjectList.map(item => ({key: item}))}
          renderItem={({item}) => (
            <SubjectListItem subjectName={item.key} navigation={navigation} />
          )}
          style={styles.subjectList}
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
    flex: 1,
    justifyContent: 'space-around',
  },
  dropdown: {
    backgroundColor: 'white',
    margin: 35,
    marginTop: 2,
    marginBottom: 20,
  },
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
