import { GET_STALL, UPDATE_STATUS, STALL_ERROR } from './stall.types';
import axios from 'axios';

// GET USER STALL
export const getStall = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/stall/me');

    dispatch({
      type: GET_STALL,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: STALL_ERROR,
      payload: err,
    });
  }
};

// CREATE STALL
export const createStall = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/stall', formData);

    dispatch({
      type: GET_STALL,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: STALL_ERROR,
      payload: err,
    });
  }
};

// UPDATE STALL STATUS
export const updateStatus = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/stall/${id}`);

    dispatch({
      type: UPDATE_STATUS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: STALL_ERROR,
      payload: err,
    });
  }
};
