const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Body parser
app.use(express.json());

// Rutas
moviesApi(app);

// Error 404
app.use(notFoundHandler);

// Middlewares de error
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});

// Rutas de ejemplos anteriores y para el reto
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
{
  /*app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/json', (req, res) => {
  res.json({ hello: 'world' });
});

// Reto con Query Params
app.get('/query', (req, res) => {
  const leap = req.query.year % 4 ? "isn't" : 'is';
  res.send(`${req.query.year} ${leap} leap-year.`);
});

// Reto con URL Params
app.get('/params/:year', (req, res) => {
  const leap = req.params.year % 4 ? "isn't" : 'is';
  res.send(`${req.params.year} ${leap} leap-year.`);
});

// Reto con el Body
app.post('/body', (req, res) => {
  const leap = req.body.year % 4 ? "isn't" : 'is';
  res.send(`${req.body.year} ${leap} leap-year.`);
});*/
}
