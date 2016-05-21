import athlete from './athlete';
import ui from './ui';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
  ui,
  athlete,
  routing: routerReducer
});