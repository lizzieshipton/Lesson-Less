var Student = require('./studentModel.js');


module.exports = {

  createStudent : function(student){
    new Student({
      name: student.name,
      assignment: student.assignment,
      songName: 'View Score'
    }).save();
  },

  returnStudentList : function(req, res){
    Student.find({}).exec(function(err, students){
      res.status(200).send(students);
    });
  }

}
