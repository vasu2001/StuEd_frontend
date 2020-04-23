import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import StateContext from '../../context/StateContext';

const AccountScreen = () => {
  const {data, toggleTeacherUI} = useContext(StateContext);

  var switchButton = data.teacherUI
    ? require('../../assets/switchteacher.png')
    : require('../../assets/switchstudent.png');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/account.png')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.image}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 0.3,
              justifyContent: 'flex-end',
              paddingLeft: 30,
              paddingBottom: 30,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 28,
              }}>
              Sambbhav Jain
            </Text>
            <Text
              style={{
                color: '#686868',
                fontSize: 14,

                fontWeight: 'bold',
              }}>
              Student
            </Text>
          </View>
          <View
            style={{
              flex: 0.7,
              flexDirection: 'row',
              paddingRight: 30,
              justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../../assets/usermaleicon.png')}
              style={{
                height: 150,
                width: 150,
                borderRadius: 100,
              }}
            />

            <TouchableOpacity>
              <Image
                source={require('../../assets/pencil.png')}
                style={{height: 26, width: 26}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View style={{flex: 0.4, paddingLeft: 20}}>
              <Image
                source={require('../../assets/mail.png')}
                style={{
                  height: 70,
                  width: 70,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                paddingTop: 15,
                flex: 1,
              }}>
              <Text
                style={{
                  color: '#686868',
                  fontSize: 15,
                }}>
                Email
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                sambbhavjain@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <View style={{flex: 0.4}}>
              <Image
                source={require('../../assets/call.png')}
                style={{
                  height: 70,
                  width: 70,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                paddingTop: 15,
                flex: 1,
              }}>
              <Text
                style={{
                  color: '#686868',
                  fontSize: 15,
                }}>
                Phone Number
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                9891234344
              </Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', paddingLeft: 20}}>
            <View style={{flex: 0.4}}>
              <Image
                source={require('../../assets/school.png')}
                style={{
                  height: 70,
                  width: 70,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                paddingTop: 15,
                flex: 1,
              }}>
              <Text
                style={{
                  color: '#686868',
                  fontSize: 15,
                }}>
                College Name
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                JAYPEE
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end', paddingRight: 20}}>
            <TouchableOpacity onPress={toggleTeacherUI}>
              <Image
                source={switchButton}
                style={{
                  height: 60,
                  width: 200,
                }}
              />
            </TouchableOpacity>
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
