const Property = require('../models/properties.model');
const expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator/check');

// post method;
exports.property_create = function (req, res, next) {
    let property = new Property(
        {
            // name: req.body.name,
            // surname: req.body.surname,
            // username: req.body.username,
            // email: req.body.email,
            // password: req.body.password
        }
    );

    property.save(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
        // res.send('User Registered successfully!')
        // res.render('signup', { title: 'Makers B&B' });
    })
};

// exports.user_login_check = function(req, res, next) {
//   User.findAll({
//     where: { username: req.params.username,
//              password: req.params.password }

//     });
// };

// // get method;
// exports.user_details = function (req, res, next) {
//     User.findById(req.params.id, function (err, user) {
//         if (err) { return next(err); }
//         res.send(user);
//     })
// };

// // put(update) method;
// exports.user_update = function (req, res, next) {
//     User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
//         if (err) { return next(err); }
//         res.send('User Details updated successfully.');
//     });
// };

// // delete method
// exports.user_delete = function (req, res, next) {
//     User.findByIdAndRemove(req.params.id, function (err) {
//         if (err) { return next(err); }
//         res.send('User Account Deleted successfully!');
//     })
// };
