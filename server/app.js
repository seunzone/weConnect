import express from 'express';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';
import routes from './routes';

// Defining the Port Variable
const port = process.env.PORT || 3000;

// Set up the express app
const app = express();

// Log requests to the console.
app.use(volleyball);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(404).send({
  message: 'A beast ate this page, durh',
}));

app.listen(port);

export default app;