import axios from 'axios';

const activitiesUrl = `${window.location.origin}/api/athlete/activities`;

export const get = () => axios.get(activitiesUrl);
