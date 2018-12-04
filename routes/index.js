var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Makers B&B' });
});
/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Makers B&B' });
});
/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Makers B&B' });
});

module.exports = router;
