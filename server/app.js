import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import path from 'path';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import YAML from 'yamljs';
import routes from './routes';
import config from '../webpack.config.dev';


dotenv.config();


// Defining the Port Variable
const port = process.env.PORT || 3000;

// Set up the express app
const app = express();


const compiler = webpack(config);

app.use((webpackDevMiddleware)(compiler));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '../client')));

// Log requests to the console.
app.use(volleyball);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

// API Docs
const swaggerDocument = YAML.load(`${process.cwd()}/swagger.yaml`);

app.use(cors({ credentials: true, origin: true }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(404).send({
  message: 'A beast ate this page, durh',
}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);

// Console message
console.log(`Magic happens at http://localhost:${port}`);

export default app;
