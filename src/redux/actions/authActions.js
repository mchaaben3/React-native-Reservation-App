import axios from 'axios';
import {
  SIGNIN_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
} from '../constants/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from '../../services/Auth';
import configAxios from '../../services';
axios.defaults.baseURL = 'https://res-api.trustdev.info/api/v1';

export const Init = async (dispatch) => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      dispatch({
        type: 'LOGIN',
        payload: token,
      });
    }
  };
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });
  Auth.signin(email, password)
    .then(async (response) => {
      AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: response.data.token,
      });

      configAxios(response.data.token);
    })
    .catch(async (error) => {
      dispatch({
        type: SIGNIN_FAIL,
        payload: error.response.data,
      });
    });
};

export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
