const express = require ('express')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('mongodb://localhost:27017/iqviatrng2022', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection with mongodb is established')
});
const personSchema = new mongoose.Schema({
    name: String,
    age:Number,
    nationality:String
  });

const Person = mongoose.model("people",personSchema,"people")
app.use(express.json())

//post method
app.post('/people',function(req,res){
console.log('in post method')
var personInfo = req.body
var newPerson = new Person({
    name:personInfo.name,
    age:personInfo.age,
    nationality:personInfo.nationality
})
newPerson.save(function(err,Person){
    if (err)
        res.send('Save failed')
    else
    res.send('New person added '+Person)
})
})

//get method
app.get('/people',function(req,res){
    Person.find(function(err,response){
//  res.json(response)
  res.send(response)
    })
})

//update method with id
app.put("/people/:id",function(req,res){

    console.log('id ',req.params.id);
    id = req.params.id
    Person.findByIdAndUpdate(id,req.body,function(err,response){

        if (err)
        {
            res.json({message:"Error in updating with id"})
        }
        else{
            res.json(response)
        }
    })
})

//delete
app.delete('/people/:id',function(req,res){
    console.log('delete')

    Person.findByIdAndRemove(req.params.id,function(err,response){

        if (err)
        res.json({message:"Error in deleting record"})
        else{
            res.json({
                message:"person with id "+req.params.id +" is removed"})
        }

    })
})

app.listen(3333,function(){
    console.log('server started')
})