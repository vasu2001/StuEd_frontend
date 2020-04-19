import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SlotList from '../screens/student/SlotList';
import SlotDetail from '../screens/student/SlotDetail';

const Stack = createStackNavigator();

const StudentSlots = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="List" component={SlotList} />
      <Stack.Screen name="Details" component={SlotDetail} />
    </Stack.Navigator>
  );
};

export default StudentSlots;
