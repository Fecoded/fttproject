import { createSelector } from 'reselect';

const selectAlert = (state) => state.alert;

export const selectCurrentAlert = createSelector(
  [selectAlert],
  (alert) => alert
);
