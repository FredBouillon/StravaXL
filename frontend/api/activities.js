import axios from 'axios';

const activitiesUrl = window.location.origin + '/api/athlete/activities';

export function get() {
  return axios.get(activitiesUrl);
}