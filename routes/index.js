var express = require('express');
var router = express.Router();

// const User = require(path.join(__dirname, 'model/user'));
// const Property = require(path.join(__dirname, 'model/property'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Makers B&B' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Makers B&B' });
});

/* POST signup page. */
router.post('/signup', function(req, res) {
  User.signup({
    email: req.body.email,
    username: req.body.name,
    password: req.body.password
    }).then( function (result) {
    res.redirect('/');
    });
  });

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Makers B&B' });
});

module.exports = router;
