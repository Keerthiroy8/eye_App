
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/Login';
import EyesScanning from './App/EyesScanning';
import ScannedEyePreview from './App/ScannedEyePreview';
import PreviewDiagnose from './App/PreviewDiagnose';

const Stack = createStackNavigator();

export default function App() {
  return (   
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Enter Your Details">
      <Stack.Screen name="Enter Your Details" component={Login} />
      <Stack.Screen name="Eyes Scanning Now" component={EyesScanning} />      
      <Stack.Screen name="Scanned Eye Preview" component={ScannedEyePreview} />      
      <Stack.Screen name="Preview Diagnose" component={PreviewDiagnose} />      
    </Stack.Navigator>
    </NavigationContainer>
  );
}


