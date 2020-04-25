import * as React from 'react';
import SettingScreen from '../screens/common/SettingScreen';
import AccountScreen from '../screens/common/AccountScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TeacherSlots from './TeacherSlots';
import {Image} from 'react-native';
import CreateSlot from './CreateSlot';
import signup1 from '../screens/signup/signup1';
import signup2 from '../screens/signup/signup2';
import signup3 from '../screens/signup/signup3';
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
      component={CreateSlot}
      options={{
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
      name="Settings"
      component={signup3}
      options={{
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
