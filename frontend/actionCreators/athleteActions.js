export const SET_ATHLETE = 'SET_ATHLETE';

export function setAthlete(athlete) {
  return {
    type: SET_ATHLETE,
    athlete
  };
}

export function clearAthlete() {
  return {
    type: SET_ATHLETE,
    athlete: {}
  };
}