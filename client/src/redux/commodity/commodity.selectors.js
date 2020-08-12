import { createSelector } from 'reselect';

const selectCommodity = (state) => state.commodity;

export const selectCommodityItems = createSelector(
  [selectCommodity],
  (commodity) => commodity.commodityItems
);

export const selectCommodityTotalPages = createSelector(
  [selectCommodity],
  (commodity) => commodity.totalPages
);

export const selectCommodityCurrentPage = createSelector(
  [selectCommodity],
  (commodity) => commodity.currentPages
);

export const selectCommodityItem = createSelector(
  [selectCommodity],
  (commodity) => commodity.commodityItem
);

export const selectCurrentCommodity = createSelector(
  [selectCommodity],
  (item) => item.current
);
