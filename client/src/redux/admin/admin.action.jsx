import {
  ADMIN_LOADED,
  GET_USERS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
} from './admin.types';
import axios from 'axios';
import { setAlert } from '../alert/alert.action';
import setAuthToken from '../../utils/setAuthToken';

// LOAD ADMIN
export const loadAdmin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth/admin');

    dispatch({
      type: ADMIN_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// GET USERS
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/auth/users');

    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// LOGIN ADMIN
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth/admin', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    dispatch(loadAdmin());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
