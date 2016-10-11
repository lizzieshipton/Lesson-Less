var Student = require('./studentModel.js');


module.exports = {

  createStudent : function(student){
    Student.create({
      name: student.name,
      assignment: student.assignment
    });
  },

  returnStudentList : function(req, res){
    Student.find({}).exec(function(err, students){
      res.status(200).send(students);
    });
  }

}
