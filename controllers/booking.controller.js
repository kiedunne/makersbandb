const Booking = require('../schemas/booking.model');
const expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator/check');

// post method;
exports.booking_create = function (req, res, next) {
    let booking = new Booking(
        {
            status: req.body.status,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            user_id: req.session.user._id,
            property_id: req.session.property._id
        }
    );

    booking.save(function (err) {
      console.log();
        if (err) { return next(err); }
        res.redirect('/users/account');
        // res.send('User Registered successfully!')
        // res.render('signup', { title: 'Makers B&B' });
    })
};


// delete method
exports.property_delete = function (req, res, next) {
console.log('loop');
console.log(req.params);
    Property.findOneAndRemove({owner_id: req.session.user._id, _id: req.params._id}, function (err) {
        if (err) { return next(err);
         }
    })
    res.redirect('/users/account');
};

// get method;
// exports.booking_details = function (req, res, next) {
//     Booking.findById(req.params.id, function (err, prop) {
//         if (err) { return next(err); }else{
//             console.log(prop);
//             res.render('propertyDetails',{
//                 title: 'APP TEST',
//                 user: '5c0699d67c4dd2119cebbf04',
//                 propertyDetails: prop
//             });
//         }
//     })
// };
