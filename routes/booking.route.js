const express = require('express');
const router = express.Router();
const property_controller = require('../controllers/booking.controller');


router.get('/', function(req, res) {
  res.render('try_to_book');
});

module.exports = router;
