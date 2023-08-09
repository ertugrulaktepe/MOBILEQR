/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Route from './src/routes/Route';
import {AuthProvider} from './src/context/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomTabs from './src/routes/BottomTabs';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider, DefaultTheme} from 'react-native-paper';
import {theme} from './src/app/configurations/theme';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <PaperProvider theme={theme}>
            <Route />
          </PaperProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}

export default App;
