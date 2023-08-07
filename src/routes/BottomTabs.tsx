import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {StyleSheet, Text} from 'react-native';
import HomeStack from './HomeStack';
import CustomTabBarButton from './components/CustomTabBarButton';
import ProfileScreen from '../views/profile/ProfileScreen';
import ProfileStack from './components/ProfileStack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  fa0,
  faHome,
  faMugSaucer,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: '#222',
        tabBarActiveTintColor: 'blue',
        tabBarIcon: ({focused}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? faHome : faHome;
            case 'Profile':
              iconName = focused ? faMugSaucer : faMugSaucer;
          }
          return <FontAwesomeIcon icon={iconName || '0'} size={22} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Anasayfa',
          headerShown: false,

          //tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        component={HomeStack}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,

          // tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
