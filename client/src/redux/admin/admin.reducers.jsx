import {
  ADMIN_LOADED,
  GET_USERS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
} from './admin.types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  users: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
