//here get the require module and the model and express use the router 
var express = require('express');
const StudentModel = require('../models/student.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("student work properly")
})

//here routers to render the middleware
router.post('/get', function(req, res, next) {
  let newstudent=new StudentModel({
    studentId:100,
    firstName:"ajay",
    lastName:"sankar",
    department:"it"
  })
  newstudent.save(function(err,newstudent){
    if(err)
    res.send(err)
    else
    res.send({studentobj:newstudent});//status:200,message:'user added',
  });
  
  })
//exporting the router
module.exports = router;