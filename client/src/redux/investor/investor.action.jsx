import {
  GET_INVESTOR,
  GET_PROFILE,
  GET_STALL,
  INVESTOR_ERROR,
} from './investor.types';
import axios from 'axios';

// GET INVESTOR
export const getInvestor = (investor) => async (dispatch) => {
  dispatch({ type: GET_INVESTOR, payload: investor });
};

// GET INVESTOR STALLS
export const getInvestorStalls = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/stall/${id}`);

    dispatch({
      type: GET_STALL,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: INVESTOR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// GET USER PROFILE
export const getProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/${id}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: INVESTOR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
