// Import controllers & middlewares
import User from '../controllers/userController';
import {
  validateSignup,
  validateLogin
} from '../validators/userValidator';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the weConnect api');
  });

  app.post('/api/v1/auth/signup', validateSignup, User.createUser); // Signup a new user
  app.post('/api/v1/auth/login', validateLogin, User.userLogin); // log in registered user
};

export default routes;
