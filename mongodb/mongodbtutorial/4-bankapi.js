const { application } = require('express')
const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient;
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

app.listen(port,()=>{
    console.log(`server started in ${port}`)
}
)