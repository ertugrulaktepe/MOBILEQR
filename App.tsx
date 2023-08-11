import React, {useEffect, useState} from 'react';

import Route from './src/routes/Route';
import {AuthProvider} from './src/context/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider, DefaultTheme, useTheme} from 'react-native-paper';

import {Dimensions, Image, Text} from 'react-native';
import Video from 'react-native-video';

function App(): JSX.Element {
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setSplash(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  if (splash) {
    return (
      <Video
        source={require('./src/assets/splash.mp4')}
        resizeMode="cover"
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      />
    );
  }
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <PaperProvider
          theme={{
            ...DefaultTheme,
          }}>
          <NavigationContainer>
            <Route />
          </NavigationContainer>
        </PaperProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}

export default App;
