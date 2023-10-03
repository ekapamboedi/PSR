var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');


var app = express();
const port = process.env.PORT || 5000;
  
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Serve static assets from Nuxt app
app.use('/nuxt', express.static(path.join(__dirname, '../nuxt3-admin-template/.nuxt')));

// app.use('/users', usersRouter);


// app.use('/', indexRouter);
// Serve the API routes
app.use('/api', apiRouter);

// Serve the Nuxt app
const nuxt = require('nuxt');
const config = require('../nuxt3-admin-template/nuxt.config.ts');
const nuxtApp = new nuxt.Nuxt(config);

// Middleware to handle Nuxt rendering
app.use('/nuxt', (req, res) => {
  res.status(200);
  nuxtApp.render(req, res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
