const { application } = require('express')
const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient;


const ObjectId = require('mongo-objectid');

var url = "mongodb://localhost:27017/";

const port = 4000
app.use(express.json())


app.post("/api/bank",(req,res)=>{
    const bank = req.body
    //console.log(bank)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        
        var dbo = db.db("iqviatrng2022");
        var myobj = bank
       
        dbo.collection("bank").insertOne(myobj, function(err, result) {
          if (err) {
            console.log("error")
            res.send({"error":"Error while saving data"})
            db.close();
        }  
            
            else{
                console.log("Inserted id " +result.insertedId)
                console.log("data saved")
                db.close();
                res.send(bank) 
            }
      
        });
      });
   
})

app.get("/api/bank",(req,res)=>{
    console.log('inside get')

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;        
        var dbo = db.db("iqviatrng2022");
               
        dbo.collection("bank").find({}).toArray(function(err,result){
                if (err){
                    res.send({"error":"Error while saving data"})
                    db.close();
                }                 
                else{
                    console.log("documents retrieved successfully")
                    res.send(result)
                    db.close();
                    
                }
            })
        }) 
    })      
    
app.findOneAndUpdate("/api/bank/:id",(req,res)=>{
    console.log("inside put")
    const id = req.params.id
    const upddata = req.body
    console.log('id '+id)
    console.log("updated data :address" +upddata.address)
  //  var myquery = {_id : new ObjectId(id)}

    const myquery = { _id: req.body._id };
    //var myquery = { address: "Valley 345" };
  //var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };

  var newvalues =   {$set:{
	_id:req.body._id,
    name:req.body.name,
	address:req.body.address,
	location:req.body.location,
	state:req.body.state,
	pincode:req.body.pincode,
	public:req.body.public
}}
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;        
        var dbo = db.db("iqviatrng2022");
             
       
            dbo.collection("bank").updateOne(myquery,newvalues,function(err,result){
                if (err){
                    res.send({"error":"Error while saving data"})
                    db.close();
                }                 
                else{
                    console.log("document updated successfully")
                    
                    res.send(result)
                    db.close();
                }
            })
        })       
       
      });


app.listen(port,()=>{
    console.log(`server started in ${port}`)
}
)