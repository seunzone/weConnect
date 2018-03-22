// Import controllers & middlewares
import Profile from '../controllers/profile';
import Review from '../controllers/reviews';
import Validator from '../validators';
import Auth from '../controllers/user';
import Middleware from '../middleware';

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the weConnect api');
  });

  app.post('/api/v1/businesses', Validator.addBusinessValidator, Profile.addProfile); // Add Business
  app.put('/api/v1/businesses/:id', Validator.addBusinessValidator, Profile.editProfile); // Modify Business
  app.delete('/api/v1/businesses/:id', Profile.deleteProfile); // Deletes a profile
  app.post('/api/v1/businesses/reviews/:id', Review.addReview); // Post Review for a business
  app.get('/api/v1/businesses/reviews/:id', Review.getReview); // See review for a business
  app.get('/api/v1/businesses/:id', Profile.getProfileById); // See profile for a individual business
  app.post('/api/v1/auth/signup', Auth.signUp); // Signup a new user
  app.post('/api/v1/auth/login', Auth.login); // log in registered user
  app.get('/api/v1/businesses', Middleware.sorter, Profile.getAllProfile); // Sort search based on user input & gets all routes
};

export default routes;
