import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SlotDetailListItem = ({dataText, labelText}) => {
  return labelText === 'Gender Preference' ? (
    <View style={styles.mainView}>
      <Text style={styles.labelText}>{labelText}</Text>
      <View style={styles.imageContainer}>
        {dataText == 'male' ? (
          <Image
            source={require('../assets/male.png')}
            style={styles.gendericon}
          />
        ) : dataText == 'female' ? (
          <Image
            source={require('../assets/female.png')}
            style={styles.gendericon}
          />
        ) : (
          <View
            style={{
              flexDirection: 'row',
              marginTop: 2,
            }}>
            <Image
              source={require('../assets/male.png')}
              style={styles.gendericon}
            />
            <Image
              source={require('../assets/female.png')}
              style={styles.gendericon}
            />
          </View>
        )}
      </View>
    </View>
  ) : (
    <View style={styles.mainView}>
      <Text style={styles.labelText}>{labelText}</Text>
      <Text style={styles.dataText}>{dataText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderColor: 'grey',
    borderWidth: 1,
  },
  labelText: {
    backgroundColor: '#7785AC',
    borderColor: 'grey',
    flex: 0.5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    textAlign: 'center',
    color: 'white',
    textAlignVertical: 'center',
  },
  dataText: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    flex: 2,
    paddingHorizontal: 10,
    textAlignVertical: 'center',
  },
  gendericon: {
    height: 20,
    width: 20,
    marginRight: 10,
    marginTop: 5,
  },
  imageContainer: {
    flex: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});

export default SlotDetailListItem;
