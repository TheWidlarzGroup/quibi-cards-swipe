/**
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/navigators/BottomNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar animated backgroundColor={'black'} barStyle="light-content" />
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default App;
