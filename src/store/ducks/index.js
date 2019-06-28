import { combineReducers } from 'redux';
import session from './session';
import order from './order';

export default combineReducers({
  session,
  order,
});
