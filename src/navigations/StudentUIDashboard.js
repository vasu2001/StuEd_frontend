import * as React from 'react';
import {Image} from 'react-native';
import SettingScreen from '../screens/common/SettingScreen';
import AccountScreen from '../screens/common/AccountScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import BrowseSlots from './BrowseSlots';
import StudentSlots from './StudentSlots';
import signup3 from '../screens/signup/signup3';

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
      name="Booked Slots"
      component={StudentSlots}
      options={{
        tabBarColor: '#131442',
        tabBarIcon: ({color}) => (
          // <Icon name="ios-add-circle" color="#ffffff" size={26} />
          <Image
            source={require('../assets/add.png')}
            style={{width: 26, height: 26}}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Settings"
      component={SettingScreen}
      options={{
        tabBarColor: '#131442',
        tabBarIcon: ({color}) => (
          // <Icon name="ios-settings" color="#ffffff" size={26} />
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
        tabBarColor: '#131442',
        tabBarIcon: ({color}) => (
          // <Icon name="md-person" color="#ffffff" size={26} />
          <Image
            source={require('../assets/user.png')}
            style={{width: 26, height: 26}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default StudentUIDashboard;
