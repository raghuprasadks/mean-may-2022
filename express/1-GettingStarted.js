const express = require('express')
const app = express()
port = 3000

app.get('/',function(req,res){
    console.log('get method')
    res.send('Get method : Hi from express server')
})

app.get('/welcome',function(req,res){
    console.log('get method:welcome')
    res.send('Welcome to join me to learn express')
})

app.get('/registration/:name',function(req,res){
    yourname = req.params.name
    res.send(yourname +' Thanks for registering with us')
})



app.listen(port,function(){
    console.log(`server started on ${port}`)
})