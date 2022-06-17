var express = require('express');
var router = express.Router();


var user_controller = require('../controllers/userController')



// POST request for creating Author.
router.post('/user/create', user_controller.user_create_post);


module.exports = router;
