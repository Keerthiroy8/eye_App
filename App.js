
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/Login';
import EyesScanning from './App/EyesScanning';

const Stack = createStackNavigator();

export default function App() {
  return (   
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Eyes" component={EyesScanning} />      
    </Stack.Navigator>
    </NavigationContainer>
  );
}


