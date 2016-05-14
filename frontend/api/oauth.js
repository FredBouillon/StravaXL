
import axios from 'axios';

const oauthUrl = window.location.origin + '/api/auth/strava';

export function login() {
  return axios.get(oauthUrl);
}

export function getAccessToken(code) {
  return axios.get(oauthUrl + '/token?code=' + code);
}

