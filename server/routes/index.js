// Import controllers & middlewares
import User from '../controllers/userController';
import Business from '../controllers/businessController';
import authLogin from '../middleware/authorize';
import {
  validateSignup,
  validateLogin,
} from '../validators/userValidator';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the weConnect api');
  });

  app.post('/api/v1/auth/signup', validateSignup, User.createUser); // Signup a new user
  app.post('/api/v1/auth/login', validateLogin, User.userLogin); // log in registered user
  app.post('/api/v1/businesses', authLogin, Business.addProfile); // Add Business
  app.put('/api/v1/businesses/:id', authLogin, Business.updateProfile); // Update Business
};

export default routes;
