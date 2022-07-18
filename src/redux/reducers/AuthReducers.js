import { SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from '../constants/Auth';
const initialState = {
  token: null,
  isAuth: false,
};
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { ...state, loading: true };
    case SIGNIN_SUCCESS:
      return { ...state, loading: false, token: action.payload, isAuth: true };
    case SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return { token: null, isAuth: false };

    default:
      return state;
  }
};
