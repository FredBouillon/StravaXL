import * as activitiesApi from '../api/activities';

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
export function setActivities(activities) {
  return {
    type: RECEIVE_ACTIVITIES,
    activities,
  };
}

export const fetchActivities = (accessToken) => (dispatch) => activitiesApi.get(accessToken)
  .then((response) => {
    dispatch(setActivities(response.data));
  })
  .catch((err) => {
    console.log('ACTIVITIES FAILURE', err); //eslint-disable-line
  });
