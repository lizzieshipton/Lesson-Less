var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name: String,
  assignment: String
});

module.exports = mongoose.model('Student', StudentSchema);
