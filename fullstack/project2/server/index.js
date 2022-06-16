const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/iqviatrng2022', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection with mongodb is established')
});

const productSchema = new mongoose.Schema({
    code:Number,
    name:String,
    desc:String,
    manu:String,
    price:Number
})

const product = mongoose.model("product",productSchema,"product")


products=[]

app.get("/",(req,res)=>{
    res.send("Hi from server")
})

app.post("/api/product",(req,res)=>{
    console.log("/api/product post method")
    productdata = req.body
   // products.push(product)
    var prod = new product(productdata)
    //res.send(product)
    prod.save(function(err,response){
        if (err){
            res.send({"message":"failed to add the product"})
        }else{
            res.send({"message":"product saved"})
        }
    })
})

app.get("/api/product",(req,res)=>{
    console.log("/api/product get method")
    product.find(function(err,response){
        if (err)
        {            
            console.log('error'+err)
            products=[]    
        }else{
            console.log("success")         
            products = response         
        }        
    })
    res.send(products)
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})

