import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import LoginScreen from '../views/login/Login';
import HomeScreen from '../views/home/homeScreen';
import {AuthContext} from '../context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Route = () => {
  const auth = useContext(AuthContext);
  console.log(auth?.token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        //initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        {auth?.token ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
