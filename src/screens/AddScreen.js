import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddScreen = ({navigation}) => {
  const [topic, settopic] = React.useState('');
  // constructor() {
  //   super();
  //   this.state = {
  //     show: false,
  //   };
  // }

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{resizeMode: 'stretch'}}
        source={require('../assets/bg2.png')}
        style={styles.image}>
        <View style={{flex: 0.6, justifyContent: 'flex-end', paddingLeft: 40}}>
          <Text style={{color: 'white', fontSize: 30}}>TOPIC</Text>
        </View>
        <View style={{flex: 2}}>
          <View style={{flex: 1, paddingTop: 80}}>
            <Text style={{fontSize: 22}}>Detailed Topic Description</Text>

            <TextInput
              placeholder=""
              style={{height: 50, width: '100%'}}
              placeholderTextColor="#000000"
              keyboardType={'default'}
            />
          </View>
          <View style={{flex: 4}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, paddingTop: 10}}>
                <Text style={{color: 'black', fontSize: 25}}>
                  Estimated Marks
                </Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Marks"
                  style={{height: 50}}
                  placeholderTextColor="#000000"
                  keyboardType={'number-pad'}
                />
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, paddingTop: 10}}>
                <Text style={{color: 'black', fontSize: 25}}>
                  Estimated Time
                </Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Duration"
                  style={{height: 50}}
                  placeholderTextColor="#000000"
                  keyboardType={'default'}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                paddingBottom: 80,
                paddingRight: 20,
              }}>
              <TouchableOpacity>
                <Image
                  style={{height: 73, width: 170}}
                  source={require('../assets/next.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
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
