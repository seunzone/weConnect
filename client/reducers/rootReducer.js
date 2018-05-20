import { combineReducers } from 'redux';
import allBusinesses from './allBusinessReducer';
import flashMessages from './flashMessages';
import auth from './auth';
import imageUrl from './imageUploader';
import singleBusiness from './getSingleBusiness';

export default combineReducers({
  flashMessages,
  allBusinesses,
  auth,
  imageUrl,
  singleBusiness
});
