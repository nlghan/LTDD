import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Detail from './src/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Tắt header của HomeScreen
        />
        <Stack.Screen
          name="Detail"
          component={Detail} options={{ headerShown: false }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
