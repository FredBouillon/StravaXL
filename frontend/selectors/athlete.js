import { createSelector } from 'reselect';

const getAthlete = (state) => state.athlete;

export const isUserLoggedIn = createSelector(
  [getAthlete],
  (athlete) => {
    return !!athlete.firstname;
  }
);
