import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
//import {  } from "react-native-gesture-handler";

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/account.png')}
        style={styles.image}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 28,
            marginTop: 70,
            marginHorizontal: 20,
          }}>
          Sambbhav Jain
        </Text>
        <Text
          style={{
            color: '#686868',
            fontSize: 14,
            marginTop: 5,
            marginHorizontal: 80,
            fontWeight: 'bold',
          }}>
          Student
        </Text>

        <Image
          source={require('../../assets/usermaleicon.png')}
          style={{
            height: 150,
            width: 150,
            borderRadius: 100,
            marginLeft: 180,
          }}
        />
        <View style={{marginVertical: -30}}>
          <TouchableOpacity style={{marginLeft: 340, marginTop: 0}}>
            <Image
              source={require('../../assets/pencil.png')}
              style={{height: 26, width: 26}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require('../../assets/mail.png')}
            style={{
              height: 70,
              width: 70,
              marginTop: 160,
              marginLeft: 30,
            }}
          />
          <View
            style={{
              alignItems: 'flex-end',
              marginVertical: -60,
              marginRight: 25,
            }}>
            <Text
              style={{
                color: '#686868',
                marginRight: 212,
                fontSize: 15,
              }}>
              Email
            </Text>
            <Text
              style={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 8,
                marginRight: 2,
              }}>
              sambbhavjain@gmail.com
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/call.png')}
            style={{
              height: 70,
              width: 70,
              marginTop: 130,
              marginLeft: 30,
            }}
          />
          <View
            style={{
              alignItems: 'flex-end',
              marginRight: 155,
              marginVertical: -60,
            }}>
            <Text
              style={{
                color: '#686868',
                fontSize: 15,
                marginRight: 20,
              }}>
              Phone Number
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 8,
                marginRight: -5,
              }}>
              9891234344
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/school.png')}
            style={{
              height: 70,
              width: 70,
              marginTop: 140,
              marginLeft: 30,
            }}
          />
          <View
            style={{
              alignItems: 'flex-end',
              marginRight: 162,
              marginVertical: -54,
            }}>
            <Text
              style={{
                color: '#686868',
                fontSize: 15,
                marginRight: 20,
              }}>
              College Name
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 8,
                marginRight: 42,
              }}>
              JAYPEE
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AccountScreen;

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
