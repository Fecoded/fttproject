import {
  GET_WALLET,
  GET_WALLETS,
  CREATE_WALLET,
  FUNDED_WALLET,
  FUNDED_WALLETS,
  UPDATE_STATUS,
  FILTER_PAYMENT,
  SET_CURRENT,
  WALLET_ERROR,
} from './wallet.types';
import axios from 'axios';
import { setAlert } from '../alert/alert.action';

// GET WALLET
export const getWallet = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/payment/me');

    dispatch({
      type: GET_WALLET,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: err,
    });
  }
};

// GET WALLETS
export const getWallets = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/payment');

    dispatch({
      type: GET_WALLETS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// GET FUNDED WALLET
export const getFundedWallet = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/payment/wallet/me');

    dispatch({
      type: FUNDED_WALLET,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// GET FUNDED WALLETS
export const getFundedWallets = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/payment/wallet');

    dispatch({
      type: FUNDED_WALLETS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// CREATE WALLET
export const createWallet = ({
  image,
  first_name,
  last_name,
  email,
  phone,
  amount,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('amount', amount);

    const res = await axios.post('/api/payment', formData, config);

    dispatch({
      type: CREATE_WALLET,
      payload: res.data.data,
    });

    dispatch(setAlert('Please Wait for Confirmation', 'success'));
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: err,
    });
    dispatch(setAlert(err.response.data.msg, 'danger'));
  }
};

// UPDATE WALLET AMOUNT
export const updateAmount = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put('/api/payment/me', formData, config);

    dispatch({
      type: GET_WALLET,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: err,
    });
  }
};

// UPDATE WALLET STATUS
export const updateStatus = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/payment/wallet/${id}`);

    dispatch({
      type: UPDATE_STATUS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: err,
    });
  }
};

// DELETE WALLET AMOUNT
export const deleteAmount = (formData) => async (dispatch) => {
  try {
    const res = await axios.delete('/api/payment/me', { data: formData });

    dispatch({
      type: FUNDED_WALLET,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: err,
    });
  }
};

// FILTER PAYMENTS
export const filterPayment = (text) => (dispatch) => {
  dispatch({ type: FILTER_PAYMENT, payload: text });
};

// SET CURRENT
export const getCurrentPayment = (payment) => (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: payment });
};
