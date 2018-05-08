import isEmpty from 'lodash.isempty';
import validator from 'validator';

const signupvalidator = (data) => {
  const errors = {};

  if (validator.isEmpty(data.username.trim() || '')) {
    errors.username = 'username is required';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Email is required';
  }

  if (!validator.isLength(data.password, {
    min: 6, max: 50
  })) {
    errors.password = 'Password should be at least 6 characters';
  }

  if (validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'Please confirm your password';
  }

  if (!validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords do not match';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default signupvalidator;
