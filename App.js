// In App.js in a new project

import React from 'react';
import {StateProvider} from './src/context/StateContext';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigations/MainNavigation';

const App = () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </StateProvider>
  );
};
export default App;
