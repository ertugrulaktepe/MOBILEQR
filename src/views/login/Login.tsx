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
import SocialAuthButton from '../../app/components/social-auth-button/SocialAuthButton';
import {svg} from '../../assets/icons/svgs';
import axios from 'axios';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

const LoginScreen = ({navigation}: NativeStackScreenProps<any, any>) => {
  // Local State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);
  const [isRegisteredUser, setIsRegisteredUser] = useState<boolean>(false);

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

  const continueEmail = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.38:9090/api/auth/verifyEmail',
        {
          email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setIsRegisteredUser(response.data.data.isRegisteredUser);
    } catch (err) {
      console.log(err, 'err');
    }
  };
  const handleViewBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };
  // GoogleSignin.configure({
  //   webClientId:
  //     '290745426365-e1qee5q8bg6hncquf6ni243k5933or3f.apps.googleusercontent.com',
  //   offlineAccess: true,
  // });
  // async function onGoogleButtonPress() {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //   // Get the users ID token
  //   const {idToken} = await GoogleSignin.signIn();
  //   console.log(idToken, 'idTokennnnnnnn');
  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //   console.log(googleCredential, 'credientalllll');

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }
  const devModeLogin = () => {
    navigation.navigate('Home');
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
                setEmail(e.nativeEvent.text)
              }
            />
            {isRegisteredUser && (
              <Input
                inputLabel={'Şifre'}
                textContentType="creditCardNumber"
                secureTextEntry={true}
                placeholder="Şifre giriniz"
                onChange={(e: NativeSyntheticEvent<any>) =>
                  setEmail(e.nativeEvent.text)
                }
              />
            )}

            <Button
              onPress={devModeLogin}
              mode="contained"
              buttonColor={theme.colors.blue400}
              style={styles.button}>
              Email ile devam et
            </Button>
          </View>
          <View style={styles.subTitleContainer}>
            <View style={styles.subTitleLine}></View>
            <Text style={styles.subTitleText}>Or countinue with</Text>
            <View style={styles.subTitleLine}></View>
          </View>
          <SocialAuthButton
            svgUri={svg.google}
            onPress={() => {}}
            title="Continue With Google"
          />
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
                    //   onPress={submitLogin}
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
