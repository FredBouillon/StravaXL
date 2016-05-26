import * as athleteApi from '../api/athlete';

export const RECEIVE_ATHLETE = 'RECEIVE_ATHLETE';
export function setAthlete(athlete) {
  return {
    type: RECEIVE_ATHLETE,
    athlete
  };
}

export const CLEAR_ATHLETE = 'CLEAR_ATHLETE';
export function clearAthlete() {
  return {
    type: CLEAR_ATHLETE
  };
}

export function fetchAthlete(accessToken) {
  return (dispatch) => {
    return athleteApi.get(accessToken)
      .then((response) => {
        dispatch(setAthlete(response.data));
      })
      .catch((err) => {
        console.log('ATHLETE FAILURE', err); //eslint-disable-line
      });
  };
}