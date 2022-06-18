var User = require('../models/user')
//var async = require('async')
//var Book = require('../models/book')


// Handle Author create on POST.
exports.user_create_post = [

    // Process request after validation and sanitization.
    (req, res, next) => {
      console.log('backend :create user')

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
      console.log("user login backend")
            // Save author.
            User.findOne({ aadhar: req.body.aadhar, otp: req.body.otp },function (err,data) {
              console.log("data##",data)
              //  if (err) { return next(err); }
              if(data!=null){
                res.send({success:true})
              }else{
                res.send({success:false,message:'Aadhar or otp is incorrect'})
                
              }
            });
        }
    
];


