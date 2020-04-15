import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SubjectSelect from '../screens/common/SubjectSelect';
import TopicSelect from '../screens/common/TopicSelect';

const Stack = createStackNavigator();

BrowseSlots = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Subject" component={SubjectSelect} />
      <Stack.Screen name="Topic" component={TopicSelect} />
    </Stack.Navigator>
  );
};

export default BrowseSlots;
