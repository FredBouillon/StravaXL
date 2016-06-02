
import axios from 'axios';

const oauthUrl = `${window.location.origin}/api/auth/strava`;

export const login = () => axios.get(oauthUrl);

export const getAccessToken = (code) => axios.get(`${oauthUrl}/token?code=${code}`);

export const deauthorize = () => axios.get(`${oauthUrl}/deauthorize`);
