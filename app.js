var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const User = require(path.join(__dirname, 'model/user'));
const Property = require(path.join(__dirname, 'model/property'));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

  /* GET home page. */
  app.get('/', function(req, res) {
    res.render('index', { title: 'APP TEST' });
  });

  /* GET signup page. */
  app.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'APP TEST' });
  });

  /* POST signup page. */
  app.post('/signup', function(req, res) {
    User.signup({
      email: req.body.email,
      username: req.body.name,
      password: req.body.password
      }).then( function (result) {
      res.redirect('/');
      });
    });

  /* GET login page. */
  app.get('/login', function(req, res, next) {
    res.render('login', { title: 'APP TEST' });
  });

  app.listen(3000, function() {
    console.log('Server started on port 3000');
  })

module.exports = app;
