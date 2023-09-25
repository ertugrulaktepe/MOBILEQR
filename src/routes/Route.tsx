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

// Stack && Tab
const Stack = createNativeStackNavigator();
const routes = [
  {
    routeName: 'OpeningSlider',
    component: OpeningSlider,
  },
  {
    routeName: 'Login',
    component: LoginScreen,
  },
  {
    routeName: 'Home',
    component: BottomTabs,
  },
];
const Route = () => {
  return (
    <Stack.Navigator
      initialRouteName={'OpeningSlider'}
      screenOptions={{headerShown: false}}>
      {routes.map(route => (
        <Stack.Screen
          key={route.routeName}
          name={route.routeName}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Route;
