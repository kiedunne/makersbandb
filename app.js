var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// const User = require(path.join(__dirname, 'model/user'));
// const Property = require(path.join(__dirname, 'model/property'));

// For validations
var expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator/check');

// Global Variable

router.use(function(req, resp, next){
  resp.locals.errors = null;
  resp.locals.title = null;
  next();
});

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

  /* GET home page. */
  app.get('/', function(req, res) {
    res.render('index', { title: 'APP TEST' });
  });

  /* GET signup page. */
  app.get('/users', function(req, res, next) {
    res.render('signup', { title: 'APP TEST', errors: '' });
  });

  /* POST signup page. */
  app.post('/users/new', [check('name').not().isEmpty().withMessage('First Name is emty'),
    check('surname').not().isEmpty().withMessage('Second Name is emty'),
    check('username').not().isEmpty().withMessage('User Name is emty'),
    check('email').isEmail().withMessage('Not an email'),
    check('password').isLength({ min: 5 }).withMessage('Minimun length for password are 5 character')] , (req, resp) =>{

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // console.log(errors.array());
    // return;
    resp.render('signup', {
      title: 'Makers B&B',
      errors: errors.array()
    });
    // console.log(resp.status(422).json({ errors: errors.msg }));
  } else {
  var user;
  // INSERTION IN THE DATA BASE
  user = {
    first_name: req.body.first_name,
    second_name: req.body.second_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  console.log(user);
  resp.redirect('/');
  }
});

  /* GET login page. */
  app.get('/login', function(req, res, next) {
    res.render('login', { title: 'APP TEST' });
  });

  // app.listen(3000, function() {
  //   console.log('Server started on port 3000');
  // })

module.exports = app;
