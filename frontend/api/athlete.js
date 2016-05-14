import axios from 'axios';

const athleteUrl = window.location.origin + '/api/athlete';

export function get() {
  return axios.get(athleteUrl);
}