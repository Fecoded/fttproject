import { createSelector } from 'reselect';

const selectProfile = (state) => state.profile;

export const selectUserProfile = createSelector(
  [selectProfile],
  (profile) => profile
);

export const selectUserProfiles = createSelector(
  [selectProfile],
  (profile) => profile.profiles
);
