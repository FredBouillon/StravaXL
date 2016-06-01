import * as activitiesApi from '../api/activities';

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
export function setActivities(activities) {
  return {
    type: RECEIVE_ACTIVITIES,
    activities
  };
}

export function fetchActivities(accessToken) {
  return function (dispatch) {
    return activitiesApi.get(accessToken)
      .then((response) => {
        dispatch(setActivities(response.data));
      })
      .catch((err) => {
        console.log('ACTIVITIES FAILURE', err); //eslint-disable-line
      });
  };
}