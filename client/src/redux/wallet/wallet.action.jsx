import { GET_WALLET, WALLET_ERROR, GET_WALLETS } from './wallet.types';
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

// CREATE WALLET
export const createWallet = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/payment', formData);

    dispatch({
      type: GET_WALLET,
      payload: res.data.data,
    });

    dispatch(setAlert('Transaction was Successfully!!!', 'success'));
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: err,
    });
    dispatch(setAlert(err.msg, 'danger'));
  }
};

// UPDATE WALLET AMOUNT
export const updateAmount = (amount) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ amount });

  try {
    const res = await axios.put('/api/payment/me', body, config);

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
