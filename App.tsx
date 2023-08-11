import React from 'react';

import Route from './src/routes/Route';
import {AuthProvider} from './src/context/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider, DefaultTheme, useTheme} from 'react-native-paper';
import {theme} from './src/app/configurations/theme';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Route />
          </NavigationContainer>
        </PaperProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}

export default App;
