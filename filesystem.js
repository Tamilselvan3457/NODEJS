//here we get fs module
var fs=require('fs')
//fs.readfile method with function
// The exact module is-- fs.readFile(file[, options], callback)
fs.readFile('con1.js','utf8',function(err,data){
    console.log(data)
})
// fs.readFile('data',function (error,data) {
//     if (error){
//         console.log(data);
//         console.log("failed");

//     }else{
//         console.log("sucess");
//     }
    
    
// });
