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
} from '../middleware/businessValidator';
import {
  validateSignup,
  validateLogin,
  validateUserLength
} from '../middleware/userValidator';


const routes = (app) => {
  // Signup a new user
  app.post('/api/v1/auth/signup', validateSignup, validateUserLength, User.createUser);
  // log in registered user
  app.post('/api/v1/auth/login', validateLogin, User.userLogin);
  // Add Business
  app.post('/api/v1/businesses', authLogin, verifyInput, verifyLenght, Business.addBusiness);
  // Update Business
  app.put('/api/v1/businesses/:id', authLogin, verifyInput, verifyLenght, verifyId, Business.updateBusiness);
  // Delete Business
  app.delete('/api/v1/businesses/:id', authLogin, verifyId, Business.deleteBusiness);
  // Gets a single business
  app.get('/api/v1/businesses/:id', verifyId, Business.getSingleBusiness);
  // Gets all businesses
  app.get('/api/v1/businesses', Business.sortSearch, Business.getAllBusiness);
  // Post review
  app.post('/api/v1/businesses/:id/review', authLogin, verifyReview, Reviews.addReview);
  // Get review
  app.get('/api/v1/businesses/:id/review', verifyId, Business.getSingleBusiness);

  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the weConnect api');
  });
};

export default routes;
