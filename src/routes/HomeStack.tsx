import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../views/home/homeScreen';
import QrScanner from '../views/qr-scanner/QrScanner';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home_screen" component={HomeScreen} />
      <Stack.Screen name="qr_modal" component={QrScanner} />
    </Stack.Navigator>
  );
};

export default HomeStack;
