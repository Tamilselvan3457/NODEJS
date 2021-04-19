//here importing the require modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var bodyparser = require('body-parser');

 //import mongoose
var mongoose=require("mongoose")
//here connect to the mongodb with database name
mongoose.connect('mongodb://localhost/mydb')

//here get the user defined modules
 var StudentModel=require('./models/student.model')



//creating the variable to the exporting the routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter= require('./routes/student');
var studentsRouter1= require('./routes/studentss');
var studentsRouter2= require('./routes/studentdelete');

//assign express to this app 
var app = express();

// view engine setup.ie it send html page to the user
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentsRouter);
app.use('/studentss', studentsRouter1);
app.use('/studentdelete', studentsRouter2);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;