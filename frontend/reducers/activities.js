import { RECEIVE_ACTIVITIES } from '../actionCreators/activitiesActions';

export default function athlete(state = [], action) {
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities;
    default:
      return state;
  }
}
