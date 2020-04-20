import * as React from 'react';
import AddScreen2 from '../screens/AddScreen2';
import SettingScreen from '../screens/common/SettingScreen';
import AccountScreen from '../screens/common/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TeacherSlots from './TeacherSlots';
import {Image} from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const TeacherUIDashboard = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{backgroundColor: '#694fad'}}>
    <Tab.Screen
      name="Home"
      component={TeacherSlots}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: '#131442',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../assets/home.png')}
            style={{width: 26, height: 26}}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Add"
      component={AddScreen2}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: '#131442',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../assets/add.png')}
            style={{width: 26, height: 26}}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: '#131442',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../assets/settings.png')}
            style={{width: 26, height: 26}}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: '#131442',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../assets/user.png')}
            style={{width: 26, height: 26}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TeacherUIDashboard;
