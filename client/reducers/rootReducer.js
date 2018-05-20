import { combineReducers } from 'redux';
import allBusinesses from './allBusinessReducer';
import flashMessages from './flashMessages';
import auth from './auth';
import imageUrl from './imageUploader';

export default combineReducers({
  flashMessages,
  allBusinesses,
  auth,
  imageUrl
});
