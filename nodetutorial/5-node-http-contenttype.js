var http = require('http')

var count=0
const port = 8080

var server = http.createServer((req,res)=>{
    console.log('received request')
    count += 1
   // res.writeHead(200,{'Content-type':'text/html'})
   // resp ="<h1>Number of requests "+count+"<h1>"

   

   res.writeHead(200,{'Content-type':'application/json'})
   resp = {count :count}
    res.write(JSON.stringify(resp))
   //res.write(resp)

    res.end();     
})

server.listen(port,()=>{
    console.log(`server started on ${{port}}`)
})