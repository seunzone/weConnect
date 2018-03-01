// Import controllers
import Profile from '../controllers';
import Review from '../controllers/reviews';
import Validator from '../validators';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the weConnect api');
  });
  app.post('/api/v1/profile', Validator.addBusinessValidator, Profile.addProfile); // Add Business
  app.put('/api/v1/profile/:id', Validator.addBusinessValidator, Profile.editProfile); // Modify Business
  app.delete('/api/v1/profile/:id', Profile.deleteProfile); // Deletes a profile
  app.post('/api/v1/profile/review/:id', Review.addReview); // Post Review for a business
  app.get('/api/v1/profile/review/:id', Review.getReview); // See review for a business
};

export default routes;
