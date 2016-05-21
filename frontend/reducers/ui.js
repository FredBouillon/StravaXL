const initialState = {
  isDrawerOpen: true
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return Object.assign({}, state, {isDrawerOpen: !state.isDrawerOpen});
    default:
      return state;
  }
}