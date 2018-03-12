import { isEmpty } from 'lodash';
import Validator from 'validator';


export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const error = {};

  if (!password) {
    error.password = 'Password is required';
  }

  if (password && Validator.isEmpty(password.trim() || '')) {
    error.password = 'Password is required';
  }

  if (!email) {
    error.email = 'Email is required';
  }

  if (email && !Validator.isEmail(email.trim() || '')) {
    error.email = 'Please provide a valid email address';
  }

  if (isEmpty(error)) return next();
  return res.status(400).json({ error });
};


export const validateSignup = (req, res, next) => {
  const {
    username, email, password, confirmPassword
  } = req.body;
  const error = {};

  if (!username) {
    error.username = 'Username is required';
  }

  if (username && Validator.isEmpty(username.trim() || '')) {
    error.username = 'Username is required';
  }

  if (!password) {
    error.password = 'Password is required';
  }

  if (!confirmPassword) {
    error.password = 'Please confirm your password';
  }

  if (Validator.isEmpty(password || '') ||
    Validator.isEmpty(confirmPassword || '') ||
    (confirmPassword.trim() !== password.trim())) {
    error.password = 'Passwords do not match';
  }

  if (!email) {
    error.email = 'Email is required';
  }

  if (email && !Validator.isEmail(email.trim() || '')) {
    error.email = 'Email address is empty or invalid';
  }

  if (isEmpty(error)) return next();
  return res.status(400).json({ error });
};
