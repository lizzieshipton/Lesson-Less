var Student = require('./studentModel.js');


module.exports = {

  createStudent : function(student){
    console.log(student);
    new Student({
      name: student.name,
      assignment: student.assignment,
      songName: student.songName
    }).save();
  },

  returnStudentList : function(req, res){
    Student.find({}).exec(function(err, students){
      res.status(200).send(students);
    });
  }

}
