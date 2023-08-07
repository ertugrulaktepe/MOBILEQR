import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import LoginScreen from '../views/login/Login';
import HomeScreen from '../views/home/homeScreen';
import {AuthContext} from '../context/AuthContext';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Route = () => {
  const auth = useContext(AuthContext);
  console.log(auth?.token);
  return (
    <Stack.Navigator
      //initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Route;
