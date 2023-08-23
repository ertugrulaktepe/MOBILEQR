import {API_URL} from '@env';
import axios from 'axios';

export const instance = axios.create({
  baseURL: API_URL,
});

const useReq = () => {
  const get = async (url: string) => {
    try {
      const response = await instance.get(url);
      return response.data;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  const post = async (url: string, body: any) => {
    try {
      const response = await instance.post(url, body);
      return response.data;
    } catch (err) {
      return err;
    }
  };
  const put = async (url: string, body: any) => {
    try {
      const response = await instance.put(url, body);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const del = async (
    url: string,
    id: string | number | string[] | number[],
  ) => {
    try {
      const response = await instance.delete(url + id);
      return response.data;
    } catch (err) {
      return err;
    }
  };
  return {get, post, put, del};
};

export default useReq;
