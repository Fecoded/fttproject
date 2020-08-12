import {
  GET_INVESTOR,
  GET_PROFILE,
  GET_STALL,
  INVESTOR_ERROR,
} from './investor.types';

const initialState = {
  investor: {},
  investorProfile: {},
  investorStalls: [],
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_INVESTOR:
      return {
        ...state,
        investor: payload,
      };
    case GET_STALL:
      return {
        ...state,
        investorStalls: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        investorProfile: payload,
      };
    case INVESTOR_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
