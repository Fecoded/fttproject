import { createSelector } from 'reselect';

const selectWallet = (state) => state.wallet;

export const selectWalletItem = createSelector(
  [selectWallet],
  (wallet) => wallet.walletItem
);

export const selectWalletItems = createSelector(
  [selectWallet],
  (wallet) => wallet.walletItems
);

export const selectFundedWallet = createSelector(
  [selectWallet],
  (wallet) => wallet.fundedWallet
);

export const selectFundedWallets = createSelector(
  [selectWallet],
  (wallet) => wallet.fundedWallets
);

export const selectWalletFilter = createSelector(
  [selectWallet],
  (wallet) => wallet.filtered
);

export const selectWalletCurrent = createSelector(
  [selectWallet],
  (wallet) => wallet.current
);

// export const selectWalletItemCount = createSelector(
//   [selectWalletItem],
//   (walletItems) =>
//     walletItems.reduce(
//       (accumulatedAmount, walletItem) => accumulatedAmount + +walletItem.amount,
//       0
//     )
// );
