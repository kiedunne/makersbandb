const User = require('../schemas/user.model');
const expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator/check');

// post method;
exports.user_create = function (req, res, next) {
    let user = new User(
        {
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
    );

    user.save(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
        // res.send('User Registered successfully!')
        // res.render('signup', { title: 'Makers B&B' });
    })
};

// login post method;
exports.user_login_check = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
      User.findOne({ username: username, password: password }, function(err, user) {
        if(err) {
          console.log(err);
        }
        if(!user) {
          console.log("no user");
          res.redirect('/login');
        }
        req.session.user = user
        console.log("found user!");
        console.log(user)
        res.redirect('/');
      });
    };

// display user;
exports.user_display = function(req, res, next) {
    User.findOne({},function(err, user){
        if (err) {
          console.log(err);
        } else{
          console.log(user);
          return user;
        };
    });
};

// logout get method;
exports.user_logout = function (req, res, next) {
      req.session.user = null;
      res.redirect('/');
    };

// get method;
exports.user_details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) { return next(err); }
        res.send(user);
    })
};

// put(update) method;
exports.user_update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) { return next(err); }
        res.send('User Details updated successfully.');
    });
};

// delete method
exports.user_delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) { return next(err); }
        res.send('User Account Deleted successfully!');
    })
};
