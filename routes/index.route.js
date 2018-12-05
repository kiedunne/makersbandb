var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'APP TEST' });
});

router.get('/users', function(req, res) {
  res.render('signup', { title: 'APP TEST', errors: '' });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/properties', function(req, res) {
  res.render('propertyAdd');
});

module.exports = router;
