var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var student = require('./Database/studentController.js');

var db = mongoose.connect('mongodb://localhost/lessonTheLoad');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MONGODB');
});

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/Client'));

app.get('/teacher', function(req, res){
  console.log('get to teacher');
  res.sendFile(__dirname + '/Client/app/teacher.html');
})

app.get('/student', function(req, res){
  console.log('get to teacher');
  res.sendFile(__dirname + '/Client/app/student.html');
});

app.get('/studentList', function(req, res){
  console.log('inside server');
  student.returnStudentList(req, res);
});

app.post('/assignments', function(req, res){
  console.log(req.body);
  student.createStudent(req.body);
});

app.listen(3000, function(){
  console.log('server listening on port 3000');
});
