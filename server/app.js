import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import path from 'path';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import YAML from 'yamljs';
import routes from './routes';
import webpackDev from '../webpack.dev';


dotenv.config();


// Defining the Port Variable
const port = process.env.PORT || 3000;

// Set up the express app
const app = express();

// Log requests to the console.
app.use(volleyball);

const publicPath = express.static(path.join(__dirname, '../build'));

app.use('/', publicPath);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);


if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackDev);
  app.use(webpackMiddleware(compiler, {
    publicPath: webpackDev.output.publicPath,
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

// API Docs
const swaggerDocument = YAML.load(`${process.cwd()}/swagger.yaml`);

app.use(cors({ credentials: true, origin: true }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(404).send({
  message: 'A beast ate this page, durh',
}));

app.listen(port);

// Console message
console.log(`Magic happens at http://localhost:${port}`);

export default app;
