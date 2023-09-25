import React, {useContext, useEffect} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import TopBar from './components/topBar/TopBar';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const HomeScreen = () => {
  const onSuccess = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <TopBar />
    </>
  );
};

export default HomeScreen;
