//here we get the http module
var html=require("http");
//here using the module  we create a server with function 
html.createServer(function(request,response) {
    response.writeHead(200,{'content-type':'text/plain'})//here header command text is plain and  200
    response.end("this is tamil selvan from  Tamil Nadu");    
}).listen(8082); //here we listening to the port 8082
console.log('server running at http://127.0.0.1:8082');
