import axios from 'axios';
import {ReactNode, createContext, useEffect, useState} from 'react';
import {Alert, Text} from 'react-native';

type IAuthContext = {
  token: string;
  setToken: (token: string) => void;
  login: (username: string, password: string) => void;
};

export const AuthContext = createContext<IAuthContext | undefined>(undefined);
export const AuthProvider = ({children}: any) => {
  const [token, setToken] = useState('');
  const login = async (username: string, password: string) => {
    try {
      //   const response = await axios.post(
      //     'http://localhost:9090/api/auth/login',
      //     {
      //       email: username,
      //       password,
      //     },
      //     {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     },
      //   );
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
