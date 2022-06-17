var User = require('../models/user')
//var async = require('async')
//var Book = require('../models/book')


// Handle Author create on POST.
exports.user_create_post = [

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Create Author object with escaped and trimmed data
        var user = new User(
            {
                name: req.body.name,
                aadhar: req.body.aadhar,
                mobile: req.body.mobile,
                address: req.body.address,
                pin: req.body.pin,
                state: req.body.state,
                otp: req.body.otp,
            }
        );

        
            // Data from form is valid.

            // Save author.
            user.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                //res.redirect(author.url);
                res.send(user)
            });
        }
    
];

exports.user_login = [

    // Process request after validation and sanitization.
    (req, res, next) => {
            // Data from form is valid.

            // Save author.
            User.find({ aadhar: req.body.aadhar, otp: req.body.otp },function (err) {
              //  if (err) { return next(err); }
              if (err){
                res.send({"message":"login failed"})
              }else{
                // Successful - redirect to new author record.
                //res.redirect(author.url);
                res.send({"message":"login success"})
              }
            });
        }
    
];


