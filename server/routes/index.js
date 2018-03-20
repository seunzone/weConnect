// Import controllers & middlewares
import User from '../controllers/userController';
import Business from '../controllers/businessController';
import Reviews from '../controllers/reviewsController';
import authLogin from '../middleware/authorize';
import {
  verifyInput,
  verifyLenght,
  verifyId,
  verifyReview
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

  // Signup a new user
  app.post('/api/v1/auth/signup', validateSignup, validateUserLenght, User.createUser);
  // log in registered user
  app.post('/api/v1/auth/login', validateLogin, User.userLogin);
  // Add Business
  app.post('/api/v1/businesses', authLogin, verifyInput, verifyLenght, Business.addProfile);
  // Update Business
  app.put('/api/v1/businesses/:id', authLogin, verifyInput, verifyLenght, verifyId, Business.updateProfile);
  // Delete Business
  app.delete('/api/v1/businesses/:id', authLogin, verifyId, Business.deleteProfile);
  // Gets a single business
  app.get('/api/v1/businesses/:id', verifyId, Business.getSingleProfile);
  // Gets all businesses
  app.get('/api/v1/businesses', Business.sortSearch, Business.getAllProfile);
  // Post review
  app.post('/api/v1/businesses/:id/review', authLogin, verifyId, verifyReview, Reviews.addReview);
};

export default routes;
