import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_WALLET,
  AUTH_ERROR,
  LOGOUT,
} from './user.types';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { setAlert } from '../alert/alert.action';

// LOAD USER
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth/user');

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// USER LOGIN
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth/user', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    dispatch(loadUser());
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

// REGISTER USER
export const register = ({
  first_name,
  last_name,
  email,
  phone,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    phone,
    password,
  });

  try {
    const res = await axios.post('/api/user', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.msg;

    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_WALLET });
};
