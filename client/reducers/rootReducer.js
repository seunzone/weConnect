import { combineReducers } from 'redux';
import allBusinesses from './allBusinessReducer';
import flashMessages from './flashMessages';
import auth from './auth';

export default combineReducers({
  flashMessages,
  allBusinesses,
  auth
});
