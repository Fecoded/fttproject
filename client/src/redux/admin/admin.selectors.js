import { createSelector } from 'reselect';

const selectUser = (state) => state.admin;

export const selectCurrentUser = createSelector([selectUser], (admin) => admin);

export const selectUsers = createSelector([selectUser], (admin) => admin.users);
