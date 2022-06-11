var http = require('http')

var server = http.createServer(function (request,response){
    console.log('Received request')
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write('hi from server')
    response.end('')
});

server.listen(8080,function(){
    console.log('server has started on port 8080')
})