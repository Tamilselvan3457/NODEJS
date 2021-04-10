//here get the modules
var express=require("express");
var http=require("http");
var mysql=require("mysql");
//assign the framework to the variable
var host2=express();
//create a connection  to  specified db
var host1=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ngpcollege",
    
});
//create the connection
host1.connect(function(err) {
    if(err){
        console.log("err");

    }
    else{
        console.log("success");
    }
    
});
//create server 
var server=http.createServer(host2);

//use .get method to pass query with function   
host2.get("/teachers",function (req,res) {
host1.query("SELECT * From teachers",function (error,rows,fields){
    if(error){
        console.log("err");

          }
     else{
        console.log('success\n');
        res.send(rows);
       }
});
});
host2.get("/getdata",function (req,res) {
    console.log(req);
    host1.query(`SELECT * From ${req.query.name}`,function (error,rows,fields){
        if(error){
            console.log("err");
    
              }
         else{
            console.log('success\n');
            res.send(rows);
           }
    });
    });
host2.get("/student",function (req,res) {
host1.query("SELECT * From student",function (error,rows,field){
    if(error){
        console.log("err");

          }
     else{
        console.log('success\n');
        res.send(rows);
       }
});
});

//here listening to the server       
server.listen(3000,function (res,req) {
    console.log("listening");
    
});