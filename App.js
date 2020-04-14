// In App.js in a new project

import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import StudentUIDashboard from "./navigations/StudentUIDashboard";
import TeacherUIDashboard from "./navigations/TeacherUIDashboard";

const App = () => {
     //states for monitoring signin and teacher-ui conditions on the UI
     const [teacherUI, setTeacherUI] = useState(false);
     const [signin, setSignin] = useState(true);

     return signin ? (
          teacherUI ? (
               <NavigationContainer>
                    <TeacherUIDashboard />
               </NavigationContainer>
          ) : (
               <NavigationContainer>
                    <StudentUIDashboard />
               </NavigationContainer>
          )
     ) : null;
};
export default App;
