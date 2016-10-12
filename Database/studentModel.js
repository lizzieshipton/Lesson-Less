var mongoose = require('mongoose');
var Q = require('q');
var request = require('request');

var StudentSchema = new mongoose.Schema({
  name: String,
  assignment: String,
  songName: String
});



module.exports = mongoose.model('Student', StudentSchema);
