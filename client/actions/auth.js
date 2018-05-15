import axios from 'axios';
import decode from 'jwt-decode';
import { CURRENT_USER } from './actionType';
import authenticateUser from '../utils/auth';

export const currentUser = (user) => {
  return {
    type: CURRENT_USER,
    user
  }
};

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
      window.localStorage.setItem('makeToken', token);
      authenticateUser(token);
      const user = decode(token);
      dispatch(currentUser(user));
      return res.data.msg;
    });

export const signUpUsers = userCredentials => dispatch =>
  axios.post('api/v1/auth/signup', userCredentials)
    .then((res) => {
      const { token } = res.data;
      authenticateUser(token);
      // console.log(token)
      window.localStorage.setItem('makeToken', token);
      const user = decode(token);
      dispatch(currentUser(user));
      return res.data.msg;
    });
