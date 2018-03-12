import users from './userController';

const adminController = {
  userSignin: users.signin,
  userSignup: users.signup,
};

export default adminController;
