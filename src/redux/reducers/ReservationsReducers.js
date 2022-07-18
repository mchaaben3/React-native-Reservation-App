//get reservations reducer

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
let reservations = {
  data: [],
  loading: false,
  error: null,
};

export const getReservationsReducer = (state = reservations, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
    case GET_RES_BY_DATE_REQUEST:
    case GET_RES_BY_REF_REQUEST:
    case GET_RES_BY_STATUS_REQUEST:
      return { ...state, loading: true };
    case GET_LIST_SUCCESS:
    case GET_RES_BY_DATE_SUCCESS:
    case GET_RES_BY_REF_SUCCESS:
    case GET_RES_BY_STATUS_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case GET_LIST_FAIL:
    case GET_RES_BY_DATE_FAIL:
    case GET_RES_BY_REF_FAIL:
    case GET_RES_BY_STATUS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getReservationByIdReducer = (state = reservations, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
    case EDIT_RES_REQUEST:
      return { ...state, loading: true };
    case GET_LIST_SUCCESS:
    case EDIT_RES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_LIST_FAIL:
    case EDIT_RES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
