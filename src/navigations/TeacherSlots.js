import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SlotList from '../screens/teacher/SlotList';
import SlotDetail from '../screens/teacher/SlotDetail';
import StudentList from '../screens/teacher/StudentList';

const Stack = createStackNavigator();

const TeacherSlots = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="List" component={SlotList} />
      <Stack.Screen name="Details" component={SlotDetail} />
      <Stack.Screen name="StudentList" component={StudentList} />
    </Stack.Navigator>
  );
};

export default TeacherSlots;
