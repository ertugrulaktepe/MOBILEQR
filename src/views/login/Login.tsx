// React
import React, {useContext, useEffect, useState} from 'react';
import {NativeSyntheticEvent, StyleSheet, Text, View} from 'react-native';

// Routes

import {AuthContext} from '../../context/AuthContext';

// Components
import Loading from '../loading/Loading';

// Paper

import Input from '../../app/components/input/Input';
import theme from '../../app/configurations/theme';
import {Button} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {fa8, faEye} from '@fortawesome/free-solid-svg-icons';

const LoginScreen = ({navigation}: any) => {
  // Local State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Theme

  // Context

  const context = useContext(AuthContext);

  // Effects

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
      {isLoading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <View style={styles.wrapper}></View>
          <View style={styles.wrapper}>
            <Input
              inputLabel={'Email'}
              placeholder="Email giriniz"
              onChange={(e: NativeSyntheticEvent<any>) =>
                setPassword(e.nativeEvent.text)
              }
            />
            <Input
              inputLabel={'Şifre'}
              textContentType="creditCardNumber"
              secureTextEntry={true}
              placeholder="Şifre giriniz"
              onChange={(e: NativeSyntheticEvent<any>) =>
                setEmail(e.nativeEvent.text)
              }
            />

            <Button
              onPress={submitLogin}
              mode="contained"
              buttonColor={theme.colors.blue400}
              style={styles.button}>
              Giriş Yap
            </Button>
          </View>
        </View>
      )}
    </>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backgroundColor,
  },
  wrapper: {
    width: '80%',
  },
  input: theme.inputStyles,
  link: {
    color: 'blue',
    width: '100%',
  },
  button: {
    padding: 4,
  },
});
