export default function athlete(state = {}, action) {
  switch (action.type) {
    case 'SET_ATHLETE':
      return action.athlete;
    default:
      return state;
  }
}