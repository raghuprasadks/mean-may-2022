const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

products=[]

app.get("/",(req,res)=>{
    res.send("Hi from server")
})

app.post("/api/product",(req,res)=>{
    console.log("/api/product post method")
    product = req.body
    products.push(product)
    res.send(product)
})

app.get("/api/product",(req,res)=>{
    console.log("/api/product get method")
    res.send(products)
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})

