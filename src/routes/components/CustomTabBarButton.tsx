import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
type IProps = {
  children: React.ReactNode;
  accessibilityState: any;
  onPress: React.MouseEventHandler<any>;
};
const CustomTabBarButton = (props: any) => {
  const {children, accessibilityState, onPress} = props;

  if (accessibilityState?.selected) {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
  } else {
    return (
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text> {children}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default CustomTabBarButton;
const styles = StyleSheet.create({});
