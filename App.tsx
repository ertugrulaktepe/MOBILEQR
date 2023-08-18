import React, {useEffect, useState} from 'react';

import Route from './src/routes/Route';
import {AuthProvider} from './src/context/AuthContext';

import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider, DefaultTheme, useTheme} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setSplash(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
