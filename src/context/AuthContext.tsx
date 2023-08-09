import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ReactNode, createContext, useEffect, useState} from 'react';
import useStorage from '../app/hooks/useStorage';

type IAuthContext = {
  token: string;
  setToken: (token: string) => void;
  login: (username: string, password: string) => void;
};

export const AuthContext = createContext<IAuthContext | undefined>(undefined);
export const AuthProvider = ({children}: any) => {
  const [token, setToken] = useState('');
  const {getStorage, setStorage} = useStorage();
  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        'http://192.168.1.40:9090/api/auth/login',
        {
          email: username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setToken(response.data.data.token);
      await setStorage('token', response.data.data.token);

      return response.data.data.token;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{token, setToken, login}}>
      {children}
    </AuthContext.Provider>
  );
};
