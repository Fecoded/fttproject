import { createSelector } from 'reselect';

const selectStall = (state) => state.stall;

export const selectStallItems = createSelector(
  [selectStall],
  (stall) => stall.stallItems
);

export const selectStallAmountCount = createSelector(
  [selectStallItems],
  (stallItems) =>
    stallItems.reduce(
      (accumulatedAmount, stallItem) => accumulatedAmount + stallItem.amount,
      0
    )
);
