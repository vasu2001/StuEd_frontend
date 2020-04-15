import * as React from 'react';
import AddScreen from '../screens/AddScreen';
import SettingScreen from '../screens/common/SettingScreen';
import AccountScreen from '../screens/common/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
const TeacherUIDashboard = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{backgroundColor: '#694fad'}}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
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
      component={AddScreen}
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

export default TeacherUIDashboard;
