import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SubjectSelect from '../screens/common/SubjectSelect';
import TopicSelect from '../screens/common/TopicSelect';
import TeacherSelect from '../screens/student/TeacherSelect';
import SlotSelect from '../screens/student/SlotSelect';
import AddScreen from '../screens/AddScreen';

const Stack = createStackNavigator();

BrowseSlots = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Subject" component={SubjectSelect} />
      <Stack.Screen name="Topic" component={TopicSelect} />
      <Stack.Screen name="Teacher" component={TeacherSelect} />
      <Stack.Screen name="SlotDetails" component={SlotSelect} />
    </Stack.Navigator>
  );
};

export default BrowseSlots;
