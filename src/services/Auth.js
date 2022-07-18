import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from '../../urls';

axios.defaults.baseURL = 'https://res-api.trustdev.info/api/v1';
export const Auth = {
  signin: async (email, password) => {
    try {
      const response = await axios.post(`${url.Auth}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  },
};
