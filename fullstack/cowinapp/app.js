const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const port = 3000
var usersRouter = require('./routes/userRoute');


// Set up mongoose connection
var mongoose = require('mongoose');
//var dev_db_url = 'mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true';

var dev_db_url = 'mongodb://localhost:27017/iqviatrng2022';

var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(cors())
app.use(express.json());
app.use(express.static("App"));  
  
app.get('/', function (req, res) {  
    res.redirect('/');  
}); 

//app.use('/', indexRouter);
app.use('/api', usersRouter);

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})
