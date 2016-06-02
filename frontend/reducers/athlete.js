import { RECEIVE_ATHLETE, CLEAR_ATHLETE } from '../actionCreators/athleteActions';

export default function athlete(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ATHLETE:
      return action.athlete;
    case CLEAR_ATHLETE:
      return {};
    default:
      return state;
  }
}
