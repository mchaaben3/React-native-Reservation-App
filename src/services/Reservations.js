import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const Reservations = {
  getReservations: async (payload) => {
    try {
      let filters = '?';
      if (payload.filters) {
        for (const key in payload.filters) {
          if (Object.hasOwnProperty.call(payload.filters, key)) {
            if (payload.filters[key] && payload.filters[key] !== '') {
              filters += `&${key}=${payload.filters[key]}`;
            }
          }
        }
      }
      const response = await axios.get(`/reservations/0/10${filters}`, {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      });

      return response.data.data.reservations;
    } catch (error) {
      return error;
    }
  },
  getReservationByDate: async (date) => {
    try {
      const response = await axios.get(`/reservations/0/10?date=${date}`, {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      });
      return response.data.data.reservations;
    } catch (error) {
      return error;
    }
  },
  getReservationByStatus: async (status) => {
    try {
      const response = await axios.get(`/reservations/0/10?status=${status}`, {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      });
      return response.data.data.reservations;
    } catch (error) {
      return error;
    }
  },
  getReservationByRef: async (ref) => {
    try {
      const response = await axios.get(`/reservations/0/10?ref=${ref}`, {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      });
      return response.data.data.reservations;
    } catch (error) {
      return error;
    }
  },
  getReservationById: async (id) => {
    try {
      const response = await axios.get(`/reservations/${id}`, {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      });
      return response.data.data.reservation;
    } catch (error) {
      return error;
    }
  },
  confirmReservation: async (id) => {
    try {
      const response = await axios.post(`/reservations/${id}/confirm`, {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        },
      });
      return response.data.data.reservation;
    } catch (error) {
      return error;
    }
  },
};
