// React
import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Routes

import {AuthContext} from '../../context/AuthContext';

// Components
import Loading from '../loading/Loading';

// Paper

import Input from '../../app/components/input/Input';
import theme from '../../app/configurations/theme';
import {Button} from 'react-native-paper';
import Modal from 'react-native-modal';
import {Svg, SvgUri} from 'react-native-svg';
import SocialAuthButton from '../../app/components/social-auth-button/SocialAuthButton';
import {svg} from '../../assets/icons/svgs';

const LoginScreen = ({navigation}: any) => {
  // Local State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);

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
  const handleViewBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
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
          <View style={styles.subTitleContainer}>
            <View style={styles.subTitleLine}></View>
            <Text style={styles.subTitleText}>Or countinue with</Text>
            <View style={styles.subTitleLine}></View>
          </View>
          <SocialAuthButton svgUri={svg.google} title="Continue With Google" />
          <SocialAuthButton svgUri={svg.apple} title="Continue With Apple" />
          <Text style={{fontWeight: '500', fontSize: 17, marginTop: 30}}>
            Don't have an account?{' '}
            <Text
              onPress={handleViewBottomSheet}
              style={{color: theme.colors.blue400}}>
              Sign Up
            </Text>
          </Text>
          <Modal
            isVisible={bottomSheetVisible}
            coverScreen={false}
            backdropOpacity={0.2}
            style={{
              justifyContent: 'flex-end',
              margin: 0,
            }}
            onBackdropPress={handleViewBottomSheet}
            swipeDirection={'up'}>
            <View
              style={{
                backgroundColor: 'white',
                height: '70%',
                borderTopLeftRadius: 45,
                borderTopRightRadius: 45,
                padding: 25,
              }}>
              <View style={styles.container}>
                <View style={styles.wrapper}>
                  <Input
                    inputLabel={'Email'}
                    placeholder="Email giriniz"
                    onChange={(e: NativeSyntheticEvent<any>) =>
                      setPassword(e.nativeEvent.text)
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
                <View style={styles.subTitleContainer}>
                  <View style={styles.subTitleLine}></View>
                  <Text style={styles.subTitleText}>Or countinue with</Text>
                  <View style={styles.subTitleLine}></View>
                </View>
                <SocialAuthButton
                  svgUri={svg.google}
                  title="Continue With Google"
                />
                <SocialAuthButton
                  svgUri={svg.apple}
                  title="Continue With Apple"
                />
                <Text style={{fontWeight: '500', fontSize: 17, marginTop: 30}}>
                  Already have an account? {''}
                  <Text
                    onPress={handleViewBottomSheet}
                    style={{color: theme.colors.blue400}}>
                    Login
                  </Text>
                </Text>
              </View>
            </View>
          </Modal>
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
    marginTop: 10,
  },
  subTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 40,
  },
  subTitleLine: {
    width: 70,
    height: 1,
    backgroundColor: '#707374',
  },
  subTitleText: {
    color: '#707374',
  },
});
