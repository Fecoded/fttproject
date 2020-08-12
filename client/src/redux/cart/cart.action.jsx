import {
  ADD_CART,
  UPDATE_UNIT,
  REMOVE_CART,
  CLEAR_CART,
  CART_ERROR,
} from './cart.types';
import axios from 'axios';

// ADD COMMODITY TO CART
export const addCart = (item) => async (dispatch) => {
  dispatch({ type: ADD_CART, payload: item });
};

// REMOVE COMMODITY UNIT
export const removeUnit = (item) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/commodity/unit/${item.id}`, item);

    dispatch({
      type: UPDATE_UNIT,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
    });
  }
};

// ADD COMMODITY UNIT
export const addUnit = (item) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/commodity/unit/${item.id}`, item);

    dispatch({
      type: UPDATE_UNIT,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
    });
  }
};

// REMOVE COMMODITY FROM CART
export const removeCart = (item) => async (dispatch) => {
  dispatch({ type: REMOVE_CART, payload: item });
};

// CLEAR ALL COMMODITY FROM CART
export const clearCart = () => async (dispatch) => {
  dispatch({ type: CLEAR_CART });
};
