const express = require('express')
const app = express()
const cors = require('cors')
const port = 3333
const users = []
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("hi from server")
})

app.post("/api/user",(req,res)=>{
    console.log('api/user post')
    user = req.body
    users.push(user)
    res.send(user)
})

app.get("/api/user",(req,res)=>{
    console.log('api/user get')    
    res.send(users)
})

app.listen(port,()=>{
    console.log(`server started at ${port}`)
})
