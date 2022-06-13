const express = require('express')
const app = express()

//middleware
app.use(function (req,res,next){

    console.log("A request received at "+Date.now());
    next();
});

app.get('/',function(req,res){
    console.log('get request');
    res.end('After middleware')
})

app.listen(3000,function(req,res){
    console.log('server has started');
})