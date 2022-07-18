import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

axios.defaults.baseURL = 'https://res-api.trustdev.info/api/v1';
export const Stats = {
  getStats: async () => {
    try {
      const response = await axios.get('/stats', {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
