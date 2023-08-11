import React, {useContext, useEffect} from 'react';
import {Text} from 'react-native';

import TopBar from './components/topBar/TopBar';

const HomeScreen = () => {
  return (
    <>
      <TopBar />
      <Text>HomeScreen</Text>
    </>
  );
};

export default HomeScreen;
