const express = require('express')
var router = express.Router()

router.get('/user',function(req,res){

    res.send('User mangement get request')
})

module.exports = router;