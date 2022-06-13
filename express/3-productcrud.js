const express = require('express')
const app = express()
const port = 3000


app.use(express.json())

products=[]
/**
 * posting a product
 * 
 * product = {
 * code:1,
 * name:'mobile',
 * desc:"mobile 10 ",
 * manu:"Samsung",
 * price:20000
 * }
 * 
 */

app.post("/products",(req,res)=>{
    product = req.body
    products.push(product)
    res.send(product)
})

app.get("/products",(req,res)=>{
    res.send(products)
})

app.delete("/products/:code",(req,res)=>{
    pcode = req.params.code
    console.log("pcode "+pcode)
  /**
    filteredprod =products.filter((product)=>{

        console.log(product)
        console.log("code "+product.code)
       if (product.code!=pcode){
           return product
        }
        
    })

     */
    filteredprod =products.filter((product)=>product.code!=pcode)
    console.log('filtered product length ::' +filteredprod.length)
    products = filteredprod
   
    res.send(pcode)
})


app.put("/products/:code",(req,res)=>{
    pcode = req.params.code
    updatedprod = req.body
    updatedprodindex=-1
    for (i=0;i<products.length;i++){
        product = products[i]
        if (product.code ==pcode){
            updatedprodindex=i
        }
    }
    if (updatedprodindex >=0)
        products[updatedprodindex]=updatedprod
    else
        updatedprod = {code : "not found"}

    res.send(updatedprod)

})

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})