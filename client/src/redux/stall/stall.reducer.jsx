import { GET_STALL, UPDATE_STATUS, STALL_ERROR } from './stall.types';

const initialState = {
  stallItems: [],
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_STALL:
      return {
        ...state,
        stallItems: payload,
        loading: false,
      };
    case UPDATE_STATUS:
      return {
        ...state,
        stallItems: state.stallItems.map((stallItem) =>
          stallItem._id === payload._id ? payload : stallItem
        ),
        loading: false,
      };
    case STALL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
