var express = require('express');
var router = express.Router();
const properties_controller = require('../controllers/properties.controller');
const Property = require('../schemas/properties.model');
const user_controller = require('../controllers/user.controller');
const User = require('../schemas/user.model');

// Global Variable
router.use(function(req, resp, next){
  resp.locals.errors = null;
  resp.locals.user = null;
  next();
});
//

router.get('/', function(req, res) {
	Property.find({},function(err, prop){
    if (err) {
      console.log(err);
    } else{
      User.findOne({ _id: req.session.user._id },function(err, user){
        if (err) {
          console.log(err);
        } else{

          res.render('index', { title: 'APP TEST', user: user, properties: prop });
        };
      });
    };
  });
});

router.get('/users', function(req, res) {
  res.render('signup', { title: 'Signup'});
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'APP TEST'});
});

router.get('/logout', user_controller.user_logout)

router.get('/properties', function(req, res) {
  res.render('propertyAdd');
});

module.exports = router;
