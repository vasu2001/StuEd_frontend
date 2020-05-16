import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/signup/login';
import signup1 from '../screens/signup/signup1';
import signup2 from '../screens/signup/signup2';
import signup3 from '../screens/signup/signup3';

const Stack = createStackNavigator();

export default (LoginSignup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={signup1}
        options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Verify OTP"
        component={signup2}
        options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Forget Password"
        component={signup3}
        options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
});
