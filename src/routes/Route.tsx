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

// Stack && Tab
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
        component={LoginScreen}
      />
      <Stack.Screen name="Home" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Route;
