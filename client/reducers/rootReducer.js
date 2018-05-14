import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';

export default combineReducers({
  flashMessages,
  auth
});
