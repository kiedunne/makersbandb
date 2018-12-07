
const express = require('express');
const router = express.Router();
const property_controller = require('../controllers/properties.controller');

router.post('/new', property_controller.property_create);

router.get('/:id', property_controller.property_details);

// router.put('/:id/update', property_controller.property_update);

router.get('/delete', property_controller.property_delete);

module.exports = router;
