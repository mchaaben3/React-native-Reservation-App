import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { auth } from './reducers/AuthReducers';
import {
  getReservationByIdReducer,
  getReservationsReducer,
} from './reducers/ReservationsReducers';
import { getStatsReducer } from './reducers/StatsReducers';

let reducer = combineReducers({
  auth: auth,
  reservations: getReservationsReducer,
  reservation: getReservationByIdReducer,
  stats: getStatsReducer,
});

// Redux Thunk
let initialState = {};
const middleware = [thunk];

// if (__DEV__) {
//   let createFlipperDebugger = require('redux-flipper').default;
//   middleware.push(createFlipperDebugger());
// }

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
