import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './HomeStack';
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
          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'Profile') {
            iconName = faMugSaucer;
          }
          return (
            <FontAwesomeIcon
              icon={iconName || '0'}
              size={25}
              color={focused ? 'blue' : '#222'}
            />
          );
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

          // tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
