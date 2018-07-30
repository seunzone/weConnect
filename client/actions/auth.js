import axios from 'axios';
import decode from 'jwt-decode';
import { CURRENT_USER } from './actionType';
import authenticateUser from '../utils/auth';

/**
 * @description - Sets the current user in the store
 * @param {*} user
 * @returns {Object} user
 */
export const currentUser = user => ({
  type: CURRENT_USER,
  user
});

/**
 * @description - Removes token from local storage
 * @returns {*} object
 */
export function logout() {
  return (dispatch) => {
    localStorage.removeItem('makeToken');
    authenticateUser(false);
    dispatch(currentUser({}));
  };
}

export const signInUsers = userCredentials => dispatch =>
  axios.post('api/v1/auth/login', userCredentials)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('makeToken', token);
      authenticateUser(token);
      const user = decode(token);
      dispatch(currentUser(user));
      return res.data.message;
    });

export const signUpUsers = userCredentials => dispatch =>
  axios.post('api/v1/auth/signup', userCredentials)
    .then((res) => {
      const { token } = res.data;
      authenticateUser(token);
      localStorage.setItem('makeToken', token);
      const user = decode(token);
      dispatch(currentUser(user));
      return res.data.message;
    });
