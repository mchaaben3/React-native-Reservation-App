import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Reservations } from '../../services/Reservations';
import {
  DELETE_RES_FAIL,
  DELETE_RES_REQUEST,
  DELETE_RES_SUCCESS,
  EDIT_RES_FAIL,
  EDIT_RES_REQUEST,
  EDIT_RES_SUCCESS,
  GET_LIST_FAIL,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_RES_BY_DATE_FAIL,
  GET_RES_BY_DATE_REQUEST,
  GET_RES_BY_DATE_SUCCESS,
  GET_RES_BY_REF_FAIL,
  GET_RES_BY_REF_REQUEST,
  GET_RES_BY_REF_SUCCESS,
  GET_RES_BY_STATUS_FAIL,
  GET_RES_BY_STATUS_REQUEST,
  GET_RES_BY_STATUS_SUCCESS,
} from '../constants/Reservations';

axios.defaults.baseURL = 'https://res-api.trustdev.info/api/v1';

//get all reservations
export const getReservations = (payload) => {
  return (dispatch) => {
    dispatch({ type: GET_LIST_REQUEST });
    Reservations.getReservations(payload)
      .then((response) => {
        dispatch({
          type: GET_LIST_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};

export const getReservationById = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST_REQUEST });
    Reservations.getReservationById(id)
      .then((response) => {
        dispatch({
          type: GET_LIST_SUCCESS,
          payload: response.data.data.reservation,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};

export const confirmReservation = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST_REQUEST });
    Reservations.confirmReservation(id)
      .then((response) => {
        dispatch({
          type: GET_LIST_SUCCESS,
          payload: response.data.data.reservation,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};

/********************************************************* */
//get all reservations by date
export const getReservationsByDate = (date) => {
  return (dispatch) => {
    dispatch({ type: GET_RES_BY_DATE_REQUEST });
    Reservations.getReservationByDate(date)
      .then((response) => {
        dispatch({
          type: GET_RES_BY_DATE_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_RES_BY_DATE_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};
/******************************************************** */
//get all reservations by date
export const getReservationByRef = (ref) => {
  return (dispatch) => {
    dispatch({ type: GET_RES_BY_REF_REQUEST });
    Reservations.getReservationByDate(ref)
      .then((response) => {
        dispatch({
          type: GET_RES_BY_REF_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_RES_BY_REF_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};
/******************************************************** */
//get all reservations by date
export const getReservationByStatus = (status) => {
  return (dispatch) => {
    dispatch({ type: GET_RES_BY_STATUS_REQUEST });
    Reservations.getReservationByStatus(status)
      .then((response) => {
        dispatch({
          type: GET_RES_BY_STATUS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_RES_BY_STATUS_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};
//delete reservation
export const deleteReservation = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RES_REQUEST });
    Reservations.deleteReservation(id)

      .then((response) => {
        dispatch({
          type: DELETE_RES_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_RES_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};

//edit reservation
export const editReservation = (id, payload) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_RES_REQUEST });
    Reservations.editReservation(id, payload)
      .then((response) => {
        dispatch({
          type: EDIT_RES_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: EDIT_RES_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};
