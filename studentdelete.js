//here importing the express module and model and router
var express = require('express');
const studentModel = require('../models/student.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("student2 work properly")
})
//here render the middleware
router.delete('/delete', function(req, res, next) {
  const id=req.query.userId;
  studentModel.findByIdAndDelete(id,function(err,newstudent){
    if(err)
    res.send(err)
    else
    res.send({status:200,message:'user added',studentobj:newstudent});
  });
  
  })
 //exporting the router module 
module.exports = router;