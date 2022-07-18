import {
  GET_STATS_FAIL,
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
} from '../constants/Stats';

let stats = {
  loading: false,
  data: {},
  error: null,
};
export const getStatsReducer = (state = stats, action) => {
  switch (action.type) {
    case GET_STATS_REQUEST:
      return { ...state, loading: true };
    case GET_STATS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_STATS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
