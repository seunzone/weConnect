// Import controllers & middlewares
import User from '../controllers/userController';
import Business from '../controllers/businessController';
import authLogin from '../middleware/authorize';
import {
  verifyInput,
  verifyLenght,
  verifyId
} from '../validators/businessValidator';
import {
  validateSignup,
  validateLogin,
  validateUserLenght
} from '../validators/userValidator';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the weConnect api');
  });

  app.post('/api/v1/auth/signup', validateSignup, validateUserLenght, User.createUser); // Signup a new user
  app.post('/api/v1/auth/login', validateLogin, User.userLogin); // log in registered user
  app.post('/api/v1/businesses', authLogin, verifyInput, verifyLenght, Business.addProfile); // Add Business
  app.put('/api/v1/businesses/:id', authLogin, verifyInput, verifyLenght, verifyId, Business.updateProfile); // Update Business
  app.delete('/api/v1/businesses/:id', authLogin, verifyId, Business.deleteProfile); // Delete Business
  app.get('/api/v1/businesses/:id', verifyId, Business.getSingleProfile); // Gets a single business
  app.get('/api/v1/businesses', Business.getAllProfile); // Gets all businesses
};

export default routes;
