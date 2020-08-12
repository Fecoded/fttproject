import {
  GET_COMMODITY,
  GET_ALL_COMMODITY,
  CREATE_COMMODITY,
  UPDATE_COMMODITY,
  COMMODITY_ERROR,
  SET_CURRENT,
  CLEAR_COMMODITY,
} from './commodity.types';

const initialState = {
  commodityItems: [],
  commodityItem: null,
  totalPages: Number,
  currentPages: Number,
  current: null,
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload, totalPage, currentPage } = action;
  switch (type) {
    case GET_ALL_COMMODITY:
      return {
        ...state,
        commodityItems: payload,
        totalPages: totalPage,
        currentPages: currentPage,
        loading: false,
      };
    case GET_COMMODITY:
      return {
        ...state,
        commodityItem: payload,
        loading: false,
      };
    case CREATE_COMMODITY:
      return {
        ...state,
        commodityItems: [payload, ...state.commodityItems],
        loading: false,
      };
    case UPDATE_COMMODITY:
      return {
        ...state,
        commodityItems: state.commodityItems.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case CLEAR_COMMODITY:
      return {
        ...state,
        commodityItem: null,
        loading: false,
      };
    case COMMODITY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
