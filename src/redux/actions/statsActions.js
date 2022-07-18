import { Stats } from '../../services/Stats';
import {
  GET_STATS_FAIL,
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
} from '../constants/Stats';

export const getStats = () => (dispatch) => {
  dispatch({ type: GET_STATS_REQUEST });
  Stats.getStats()
    .then((response) => {
      dispatch({ type: GET_STATS_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_STATS_FAIL, payload: error.response.data.message });
    });
};
