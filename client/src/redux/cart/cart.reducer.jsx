import {
  ADD_CART,
  REMOVE_CART,
  CLEAR_CART,
  UPDATE_UNIT,
  CART_ERROR,
} from './cart.types';
import { addItemToCart } from './cart.utils';

const initialState = {
  cartItems: [],
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
    case UPDATE_UNIT:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) =>
          cartItem._id === payload._id ? payload : cartItem
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CART_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
