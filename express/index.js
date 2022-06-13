const express = require('express')
const app = express()
const port = 8080
const products = []
app.use(express.json())

app.get('/product',(req,res)=>{
  //  res.send('Hi from express')
    res.send(products)
    
})


app.post('/product',(req,res)=>{
   // res.send('Hi from express')
    let prod = req.body
    console.log('product ')
    console.log(prod)
    products.push(prod)
    res.send(prod) 
})


app.listen(8080,()=>{
    console.log(`server started on ${port}`)
})