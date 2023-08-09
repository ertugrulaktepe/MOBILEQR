import React, {useContext, useState} from 'react';
import {
  Alert,
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';
import {TextInput} from 'react-native-gesture-handler';
import {ActivityIndicator, MD2Colors, useTheme} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const {colors, fonts} = theme;
  const context = useContext(AuthContext);
  const submitLogin = () => {
    const login = context?.login(email, password);
    if (login) {
      navigation.navigate('Home');
    }
  };
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator animating={true} color={colors.primary} />
        <Text
          style={{
            marginBottom: 12,
            fontFamily: fonts.bodyLarge.fontFamily,
            fontSize: 54,
          }}>
          QCar
        </Text>
        <View style={styles.wrapper}>
          <TextInput
            value={email}
            placeholder="Email"
            style={[styles.input]}
            onChange={(e: NativeSyntheticEvent<any>) =>
              setEmail(e.nativeEvent.text)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChange={(e: NativeSyntheticEvent<any>) => {
              setPassword(e.nativeEvent.text);
            }}
          />
          <Button title="Login" onPress={submitLogin} />
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    color: 'blue',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
    width: '100%',
  },
});
