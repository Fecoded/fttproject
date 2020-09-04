import {
  GET_WALLET,
  CREATE_WALLET,
  UPDATE_STATUS,
  FILTER_PAYMENT,
  WALLET_ERROR,
  GET_WALLETS,
  CLEAR_WALLET,
  FUNDED_WALLET,
  FUNDED_WALLETS,
  SET_CURRENT,
} from './wallet.types';

const initialState = {
  walletItem: [],
  walletItems: [],
  fundedWallet: null,
  fundedWallets: [],
  current: null,
  filtered: null,
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
    case CREATE_WALLET:
      return {
        ...state,
        walletItem: [payload, ...state.walletItem],
        loading: false,
      };
    case FUNDED_WALLET:
      return {
        ...state,
        fundedWallet: payload,
        loading: false,
      };
    case FUNDED_WALLETS:
      return {
        ...state,
        fundedWallets: payload,
        loading: false,
      };
    case UPDATE_STATUS:
      return {
        ...state,
        walletItems: state.walletItems.map((walletItem) =>
          walletItem._id === payload._id ? payload : walletItem
        ),
        loading: false,
      };
    case FILTER_PAYMENT:
      return {
        ...state,
        filtered: state.walletItems.filter((walletItem) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return (
            walletItem.first_name.match(regex) ||
            walletItem.last_name.match(regex) ||
            walletItem.phone.match(regex)
          );
        }),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
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
