var mongoose = require('mongoose');
var Q = require('q');
var request = require('request');

var StudentSchema = new mongoose.Schema({
  name: String,
  assignment: String,
  songName: String
});


StudentSchema.pre('save', function(next) {
  var title = 'booboo';
    this.songName = title;
    next();
});

module.exports = mongoose.model('Student', StudentSchema);
