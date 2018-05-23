import { combineReducers } from 'redux';
import allBusinesses from './allBusinessReducer';
import flashMessages from './flashMessages';
import auth from './auth';
import imageUrl from './imageUploader';
import singleBusiness from './getSingleBusiness';
import editBusiness from './editBusiness';

export default combineReducers({
  flashMessages,
  allBusinesses,
  auth,
  imageUrl,
  singleBusiness,
  editBusiness
});
