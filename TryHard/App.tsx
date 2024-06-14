/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './screens/home/HomeScreen.tsx';
import Header from './screens/components/Header.tsx';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





function App(): React.JSX.Element {
 

  return (
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
