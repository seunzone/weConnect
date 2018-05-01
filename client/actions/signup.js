import axios from 'axios';
import decode from 'jwt-decode';
import { CURRENT_USER } from './actionType';
import authenticateUser from '../utils/auth';

export const currentUser = user => ({
  type: CURRENT_USER,
  user,
  isAuthenticated: true
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

