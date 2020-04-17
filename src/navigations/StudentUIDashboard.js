import * as React from 'react';
import SettingScreen from '../screens/common/SettingScreen';
import AccountScreen from '../screens/common/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import BrowseSlots from './BrowseSlots';

const Tab = createMaterialBottomTabNavigator();
const StudentUIDashboard = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{backgroundColor: '#694fad'}}>
    <Tab.Screen
      name="Home"
      component={BrowseSlots}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: '#131442',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color="#ffffff" size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={HomeScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: '#131442',
        tabBarIcon: ({color}) => (
          <Icon name="ios-add-circle" color="#ffffff" size={26} />
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
          <Icon name="ios-settings" color="#ffffff" size={26} />
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
          <Icon name="md-person" color="#ffffff" size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default StudentUIDashboard;