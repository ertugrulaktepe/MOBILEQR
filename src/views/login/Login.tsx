
// React 
import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Routes
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';
import {TextInput} from 'react-native-gesture-handler';

// Components
import Loading from '../loading/Loading';

// Paper
import { useTheme } from 'react-native-paper';

// Stack
const Stack = createNativeStackNavigator();

const LoginScreen = ({navigation}: any) => {

  // Local State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
 
  // Theme
  const theme = useTheme();

  // Context
  const context = useContext(AuthContext);

  useEffect(() => {
    const loadApp = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 saniye süreyle yükleme animasyonunu gösteriyoruz daha sonra kişinin internet hızına göre ayarlanacak
    };
    loadApp();
  }, []);

  const submitLogin = () => {
    const login = context?.login(email, password);
      if (login) {
        navigation.navigate('Home');
      }
  };
  
  return ( 
    <>
    {isLoading ? 
      <Loading/> :
      <View style={styles.container}>
        <Text
          style={{
            marginBottom: 12,
          }}>
          QCar
        </Text>
        <View style={styles.wrapper}>
          <TextInput
            value={email}
            placeholder="Email"
            style={styles.input}
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
      }
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
