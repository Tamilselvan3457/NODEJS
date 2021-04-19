//here get the express module 
var express = require('express');
//router given to the express
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users');
});

module.exports = router;
