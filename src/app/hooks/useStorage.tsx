import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';

const useStorage = () => {
  const getStorage = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (!value) {
        return null;
      }

      return value;
    } catch (e) {
      console.log(e);
    }
  };
  const setStorage = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };
  const removeStorage = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  };

  return {getStorage, setStorage, removeStorage};
};

export default useStorage;
