import React, {useContext} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import StudentUIDashboard from './StudentUIDashboard';
import TeacherUIDashboard from './TeacherUIDashboard';
import StateContext from '../context/StateContext';
import LoginSignup from './loginSignup';

export default (MainNavigation = () => {
  const {data} = useContext(StateContext);
  const {signin, teacherUI} = data;

  return signin ? (
    teacherUI ? (
      <TeacherUIDashboard />
    ) : (
      <StudentUIDashboard />
    )
  ) : (
    <LoginSignup />
  );
});
