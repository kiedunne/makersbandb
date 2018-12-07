const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');

router.post('/new', user_controller.user_create);

router.get('/account', user_controller.user_details);

router.post('/check', user_controller.user_login_check);

router.put('/:id/update', user_controller.user_update);

router.delete('/:id/delete', user_controller.user_delete);

module.exports = router;
