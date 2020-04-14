import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SubjectSelect from "../screens/SubjectSelect";

const Stack = createStackNavigator();

BrowseSlots = () => {
     return (
          <Stack.Navigator headerMode="none">
               <Stack.Screen name="Home" component={SubjectSelect} />
          </Stack.Navigator>
     );
};

export default BrowseSlots;
