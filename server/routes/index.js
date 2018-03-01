// Import controllers
import Profile from '../controllers';
import Validator from '../validators';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the weConnect api');
  });
  app.post('/api/v1/profile', Validator.addBusinessValidator, Profile.addProfile); // Add Business
  app.put('/api/v1/profile/:id', Validator.addBusinessValidator, Profile.editProfile); // Modify Business
};

export default routes;
