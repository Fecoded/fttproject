import {
  GET_ALL_COMMODITY,
  GET_COMMODITY,
  CREATE_COMMODITY,
  UPDATE_COMMODITY,
  CLEAR_COMMODITY,
  COMMODITY_ERROR,
  SET_CURRENT,
} from './commodity.types';
import axios from 'axios';
import { setAlert } from '../alert/alert.action';

// GET ALL COMMODITY
export const getCommodity = (count) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/commodity?perPage=6&page=${count || 1}`);

    dispatch({
      type: GET_ALL_COMMODITY,
      payload: res.data.data,
      totalPage: res.data.totalPages,
      currentPage: res.data.currentPage,
    });
  } catch (err) {
    dispatch({
      type: COMMODITY_ERROR,
    });
  }
};

// GET COMMODITY
export const getSingleCommodity = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/commodity/${id}`);

    dispatch({
      type: GET_COMMODITY,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: COMMODITY_ERROR,
    });
  }
};

// CREATE COMMODITY
export const createCommodity = ({
  image,
  product_name,
  farm_name,
  description,
  starting_unit,
  unit_number,
  buying_price,
  selling_price,
  duration,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('product_name', product_name);
    formData.append('farm_name', farm_name);
    formData.append('description', description);
    formData.append('starting_unit', starting_unit);
    formData.append('unit_number', unit_number);
    formData.append('buying_price', buying_price);
    formData.append('selling_price', selling_price);
    formData.append('duration', duration);

    const res = await axios.post('/api/commodity', formData, config);

    dispatch({
      type: CREATE_COMMODITY,
      payload: res.data.data,
    });

    dispatch(setAlert('Commodity Created Successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.msg;

    if (errors === 'File too large') {
      dispatch(setAlert(errors, 'danger'));
    } else {
      dispatch(setAlert(errors, 'danger'));
    }

    dispatch({
      type: COMMODITY_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// UPDATE COMMODITY
export const updateCommodity = (commodity) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `/api/commodity/${commodity.id}`,
      commodity,
      config
    );

    dispatch({
      type: UPDATE_COMMODITY,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: COMMODITY_ERROR,
      payload: err.response.statusText,
    });
  }
};

// GET CURRENT COMMODITY
export const getCurrentCommodity = (item) => async (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: item });
};

// CLEAR COMMODITY
export const clearCommodity = () => async (dispatch) => {
  dispatch({ type: CLEAR_COMMODITY });
};
