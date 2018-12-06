var express = require('express');
var router = express.Router();
const properties_controller = require('../controllers/properties.controller');
const Property = require('../schemas/properties.model');

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
            console.log(prop);
            res.render('index',{
            	title: 'APP TEST',
            	user: '5c0699d67c4dd2119cebbf04',
            	properties: prop
            });
        }
    });
 //res.render('index', { title: 'APP TEST', user: 1, properties: properties_controller.propertyAll()});
});

router.get('/users', function(req, res) {
  res.render('signup', { title: 'APP TEST'});
});

router.get('/login', function(req, res) {
  res.render('login');
});


module.exports = router;
