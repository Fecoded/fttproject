import { createSelector } from 'reselect';

const selectInvestor = (state) => state.investor;

export const selectCurrentInvestor = createSelector(
  [selectInvestor],
  (investor) => investor.investor
);

export const selectInvestorStalls = createSelector(
  [selectInvestor],
  (investor) => investor.investorStalls
);

export const selectInvestorProfile = createSelector(
  [selectInvestor],
  (investor) => investor.investorProfile
);
