//here get the express module and model and router 
var express = require('express');
const StudentModel = require('../models/student.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("student1 work properly")
})
//here render the middleware 
router.post('/add', function(req, res, next) {
  let newstudent=new StudentModel({
    studentId:req.body.studentId,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    department:req.body.department
  });
  newstudent.save(function(err,newstudent){
    if(err)
    res.send(err)
    else
    res.send({status:200,message:'user added',studentobj:newstudent});
  });
  
  })
//here exporting to the router  
module.exports = router;