import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SubjectSelect from '../screens/common/SubjectSelect';
import TopicSelect from '../screens/common/TopicSelect';
import AddScreen from '../screens/teacher/AddScreen';
import AddScreen2 from '../screens/teacher/AddScreen2';

const Stack = createStackNavigator();

CreateSlot = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Subject" component={SubjectSelect} />
      <Stack.Screen name="Topic" component={TopicSelect} />
      <Stack.Screen name="CreateSlot" component={AddScreen} />
      <Stack.Screen name="CreateSlot2" component={AddScreen2} />
    </Stack.Navigator>
  );
};

export default CreateSlot;
