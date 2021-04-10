const express=require('express');
const webserver=express();
webserver.get("/tamil",(reg,res)=>{
    res.send("hello tamil");
});
webserver.listen(3000,()=>console.log("listening 3000"));