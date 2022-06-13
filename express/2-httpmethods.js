const express = require('express')
const app = express()
const port = 3000

// middleware
app.use(express.json())

app.get('/api',(req,res)=>{
    res.send('api:get method')
})

app.post('/api',(req,res)=>{
    postbody = req.body
    console.log('post body'+postbody)
    res.send(postbody)
})


app.delete('/api/:id',(req,res)=>{
    idparam = req.params.id
    console.log('post id'+idparam)
    res.send(idparam)
})

app.put('/api/:id',(req,res)=>{
    idparam = req.params.id
    data= req.body
    console.log('update  id'+idparam)
    res.send(data)
})

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})