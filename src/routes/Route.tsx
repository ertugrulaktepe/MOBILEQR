// React
import {useContext, useState} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Components
import LoginScreen from '../views/login/Login';
import HomeScreen from '../views/home/homeScreen';
import BottomTabs from './BottomTabs';
import OpeningSlider from '../views/openingSlider/OpeningSlider';

// Context
import {AuthContext} from '../context/AuthContext';

// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Stack && Tab
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      initialRouteName={'OpeningSlider'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OpeningSlider" component={OpeningSlider} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Route;
