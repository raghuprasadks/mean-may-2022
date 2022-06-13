const express = require('express')
const app = express()
var usermanagement = require('./usermanagement.js')
var productmanagement = require('./productmanagement.js')
app.use(express.json())
app.use('/api',usermanagement);
app.use('/api',productmanagement);
app.listen(3000,()=>{
    console.log('server started')
})