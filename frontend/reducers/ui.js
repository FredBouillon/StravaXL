import { RECEIVE_ATHLETE, CLEAR_ATHLETE } from '../actionCreators/athleteActions';
import { TOGGLE_DRAWER } from '../actionCreators/uiActions';

const initialState = {
  isDrawerOpen: false,
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, { isDrawerOpen: !state.isDrawerOpen });
    case RECEIVE_ATHLETE:
      return Object.assign({}, state, { isDrawerOpen: true });
    case CLEAR_ATHLETE:
      return Object.assign({}, state, { isDrawerOpen: false });
    default:
      return state;
  }
}
