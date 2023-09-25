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
  faQrcode,
} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import QrScanner from '../views/qr-scanner/QrScanner';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  const icons = (focused: boolean, route: RouteProp<ParamListBase, string>) => {
    let iconName;
    if (route.name === 'HomeScreen') {
      iconName = faHome;
    } else if (route.name === 'Profile') {
      iconName = faMugSaucer;
    } else if (route.name === 'QrScan') {
      iconName = faQrcode;
    }

    return (
      <FontAwesomeIcon
        style={{marginTop: 20}}
        icon={iconName || '0'}
        size={route.name === 'QrScan' ? 40 : 25}
        color={focused ? 'blue' : '#222'}
      />
    );
  };
  const Placeholder = () => <View />;

  const CustomTabbarButton = ({children, onPress}: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          bottom: 6,
        }}>
        <View>{children}</View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: '#222',

        tabBarActiveTintColor: 'blue',
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => icons(focused, route),
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
        }}
        component={HomeStack}
      />

      <Tab.Screen
        name="QrScan"
        options={{
          tabBarButton: props => <CustomTabbarButton {...props} />,
          tabBarIconStyle: {},
        }}
        component={Placeholder}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('qr_modal');
          },
        })}
      />

      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 50,
  },
});
