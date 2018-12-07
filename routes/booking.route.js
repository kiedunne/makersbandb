const express = require('express');
const router = express.Router();
const booking_controller = require('../controllers/booking.controller');


router.post('/new', booking_controller.booking_create);

// router.get('/:id', booking_controller.booking_details);

// router.delete('/delete', booking_controller.booking_delete);

module.exports = router;
