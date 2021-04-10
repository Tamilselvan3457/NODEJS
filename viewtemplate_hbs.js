const path =require('path')
const document=require("min-document")
const express=require("express")  
const jon =express()




jon.set("view engine",'hbs')
jon.get('',(req,res)=>{
    res.render("publics",{
        title:" Tamil wish to welcome you all! ",
    } )
})
jon.get('/about',(req,res)=>{
    res.render("about",{
        title:"About Tamil  ",

    } )
})
jon.get('/hobby',(req,res)=>{
    res.render("hobby",{
        title:"Tamil hooby ",
    } )
})
jon.get("/home", function(req,res){
    res.render("home",{
    title:"Times to render" 
    }) ;

});



jon.listen(5000,()=>{
    console.log("yes")
})