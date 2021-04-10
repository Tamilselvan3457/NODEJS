var express=require("express");
var reqfmclient=express()

reqfmclient.get("/", function(req,res){
    res.sendFile(__dirname +"/"+"index.html");
});
reqfmclient.get("/home", function(req,res){
    res.send('<h1>welcome '+ req.query['username'] +' </h1><br></br><h2>mailid'+ req.query['mailid'] +'</h2>' );
    

});
reqfmclient.listen(3030); 