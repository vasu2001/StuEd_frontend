import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
const AddScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        style={styles.image}
      />
    </View>
  );
};

export default AddScreen;

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
});
