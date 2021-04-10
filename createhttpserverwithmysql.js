var html=require("http");
var express=require("express");
 var server = html.createServer(function(request,response) {
    response.writeHead(200,{'content-type':'text/plain'})
    response.end("This is Tamil selvan S from NGPIT\n");    
});
server.listen(8082);
console.log('server running at http://127.0.0.1:8082');

var mysql=require('mysql');
var con2=mysql.createConnection({
    host:"localhost",
    user:"root",
    passward:"password",
    database:"ngpcollege"

});
con2.connect(function(err){
    if(err) throw err;
    console.log("connected" );
});
var con2=express();
con2.get("/api", function (req,res) {
    console.log("i am tamil");
    
    response.send("yes");
    
    
});


