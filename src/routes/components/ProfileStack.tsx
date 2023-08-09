import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProfileScreen from '../../views/profile/ProfileScreen';
const Stack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="profile_stack" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
