const express = require('express')
const url = require('url')
const querystring = require('querystring')

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
//localhost:3000/registration/raghu
app.get('/registration/:name',function(req,res){
    yourname = req.params.name
    res.send(yourname +' Thanks for registering with us')
})
//localhost:3000/info?name=raghu&city=bengaluru
app.get('/info',function(req,res){
    yourname = req.query.name
    yourcity = req.query.city
    res.send("your name "+yourname +" your city "+yourcity)
    
})

//localhost:3000/querystring

app.get('/querystring',function(req,res){

   
let rawUrl = 'https://stackabuse.com/?page=2&limit=3';

let parsedUrl = url.parse(rawUrl);
console.log('protocol '+parsedUrl.protocol)
console.log('host ' +parsedUrl.host)
console.log('parsed query '+parsedUrl.query)
let parsedQs = querystring.parse(parsedUrl.query);
res.send(parsedQs)

})



app.listen(port,function(){
    console.log(`server started on ${port}`)
})