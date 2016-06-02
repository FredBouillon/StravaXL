import * as athleteApi from '../api/athlete';

export const RECEIVE_ATHLETE = 'RECEIVE_ATHLETE';
export const setAthlete = (athlete) => ({
  type: RECEIVE_ATHLETE,
  athlete,
});

export const CLEAR_ATHLETE = 'CLEAR_ATHLETE';
export const clearAthlete = () => ({
  type: CLEAR_ATHLETE,
});

export const fetchAthlete = (accessToken) => (dispatch) => athleteApi.get(accessToken)
  .then((response) => {
    dispatch(setAthlete(response.data));
  })
  .catch((err) => {
    console.log('ATHLETE FAILURE', err); //eslint-disable-line
  });
