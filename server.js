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


//Client side routes to teacher / student page...because ngRoute is a butthead
app.get('/teacher', function(req, res){
  console.log('get to teacher');
  res.sendFile(__dirname + '/Client/app/teacher.html');
})

app.get('/student', function(req, res){
  console.log('get to teacher');
  res.sendFile(__dirname + '/Client/app/student.html');
});


//Retrieve list of all students and their assignments
app.get('/studentList', function(req, res){
  console.log('inside server');
  student.returnStudentList(req, res);
});

//Assign a piece to a student
app.post('/assignments', function(req, res){
  console.log(req.body);
  student.createStudent(req.body);
});


app.listen(3000, function(){
  console.log('server listening on port 3000');
});
