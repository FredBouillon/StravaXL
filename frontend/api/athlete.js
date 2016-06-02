import axios from 'axios';

const athleteUrl = `${window.location.origin}/api/athlete`;

export const get = () => axios.get(athleteUrl);
