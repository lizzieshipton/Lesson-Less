var mongoose = require('mongoose');


var StudentSchema = new mongoose.Schema({
  name: String,
  assignment: String,
  songName: String
});



module.exports = mongoose.model('Student', StudentSchema);
