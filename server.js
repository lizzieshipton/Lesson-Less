var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var student = require('./Database/studentController.js');

var db = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/lessonDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MONGODB');
});

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/Client'));

//Retrieve list of all students and their assignments
app.get('/studentList', function(req, res){
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
