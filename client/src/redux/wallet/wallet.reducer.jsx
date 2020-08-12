import {
  GET_WALLET,
  WALLET_ERROR,
  GET_WALLETS,
  CLEAR_WALLET,
} from './wallet.types';

const initialState = {
  walletItem: null,
  walletItems: [],
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WALLET:
      return {
        ...state,
        walletItem: payload,
        loading: false,
      };
    case GET_WALLETS:
      return {
        ...state,
        walletItems: payload,
        loading: false,
      };
    case WALLET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_WALLET:
      return {
        ...state,
        walletItem: null,
        loading: false,
      };
    default:
      return state;
  }
};
