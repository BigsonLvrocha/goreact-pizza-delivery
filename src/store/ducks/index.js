import { combineReducers } from 'redux';
import session from './session';
import orders from './order';

export default combineReducers({
  session,
  orders,
});
