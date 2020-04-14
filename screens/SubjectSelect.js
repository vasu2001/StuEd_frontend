import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const SubjectSelect = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        style={styles.image}>
        <Text style={styles.text}>select subject</Text>
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
  text: {
    justifyContent: 'center',
    marginTop: 300,
  },
});
