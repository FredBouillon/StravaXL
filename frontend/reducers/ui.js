const initialState = {
  isDrawerOpen: false
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return Object.assign({}, state, {isDrawerOpen: !state.isDrawerOpen});
    case 'SET_ATHLETE':
      if (action.athlete.firstname) {
        return Object.assign({}, state, {isDrawerOpen: true});
      }
      return Object.assign({}, state, {isDrawerOpen: false});
    default:
      return state;
  }
}