import { isEmpty } from 'lodash';
import Validator from 'validator';


export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = {};

  if (!password) {
    errors.password = 'Password is required';
  }

  if (password && Validator.isEmpty(password.trim() || '')) {
    errors.password = 'Password is required';
  }

  if (!email) {
    errors.email = 'Email is required';
  }

  if (email && !Validator.isEmail(email.trim() || '')) {
    errors.email = 'Please provide a valid email address';
  }

  if (isEmpty(errors)) return next();
  return res.status(400).json({ errors });
};


export const validateSignup = (req, res, next) => {
  const {
    username, email, password, passwordConfrim
  } = req.body;
  const errors = {};

  if (!username) {
    errors.username = 'Username is required';
  }

  if (username && Validator.isEmpty(username.trim() || '')) {
    errors.username = 'Username is required';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  if (!passwordConfrim) {
    errors.password = 'Please confirm your password';
  }

  if (Validator.isEmpty(password || '') ||
    Validator.isEmpty(passwordConfrim || '') ||
    (passwordConfrim.trim() !== password.trim())) {
    errors.password = 'Passwords do not match or empty';
  }

  if (!email) {
    errors.email = 'Email is required';
  }

  if (email && !Validator.isEmail(email.trim() || '')) {
    errors.email = 'Email address is empty or invalid';
  }

  if (isEmpty(errors)) return next();
  return res.status(400).json({ errors });
};

export const validateUserLength = (req, res, next) => {
  const {
    username, password
  } = req.body;

  // check for username characters
  if (!Validator.isAlphanumeric(username)) {
    return res.status(406)
      .send({
        status: 'Fail',
        message: 'Only alphabets and numbers are allowed.',
      });
  }
  // Check for Username Lenght
  if (!Validator.isLength(username, { min: 3, max: 15 })) {
    return res.status(406)
      .send({
        status: 'Fail',
        message: 'Username can only be from 3 to 15 characters',
      });
  }
  // Check for Password
  if (!Validator.isLength(password, { min: 6, max: 50 })) {
    return res.status(406)
      .send({
        status: 'Fail',
        message: 'Password can only be from 6 to 50 characters',
      });
  }
  next();
};
