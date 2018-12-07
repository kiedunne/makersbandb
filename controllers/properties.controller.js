const Property = require('../schemas/properties.model');
const expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator/check');

// post method;
exports.property_create = function (req, res, next) {
    let property = new Property(
        {
            name: req.body.name,
            address: req.body.address,
            rooms: req.body.rooms,
            price: req.body.price,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            owner_id: req.session.user._id
        }
    );

    property.save(function (err) {
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
exports.property_details = function (req, res, next) {
    Property.findById(req.params.id, function (err, prop) {
        if (err) { return next(err); }else{
            console.log(prop);
            res.render('propertyDetails',{
                title: 'APP TEST',
                user: '5c0699d67c4dd2119cebbf04',
                propertyDetails: prop
            });
        }
    })
};

// exports.propertyAll = function(req, resp, next){
//     Property.find({},function(err, prop){
//         if (err) {
//             console.log(err);
//         }else{
//         console.log(prop);
//         properties: prop;
//         return;
//         }
//     });
// };



// exports.user_login_check = function(req, res, next) {
//   User.findAll({
//     where: { username: req.params.username,
//              password: req.params.password }

//     });
// };


// // put(update) method;
// exports.user_update = function (req, res, next) {
//     User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
//         if (err) { return next(err); }
//         res.send('User Details updated successfully.');
//     });
// };
