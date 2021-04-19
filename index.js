//here get the express module 
var express = require('express');
//var app=require("./tamil.js")
//router given to the express
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//here exporting to the router 
module.exports = router;
