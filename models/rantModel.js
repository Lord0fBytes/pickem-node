var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  commentId: Number,
  commentAuthor: String,
  comment: String,
  tstamp: {
    type : Date,
    "default" : Date.now
  }
});

var rantSchema = new Schema({
  title: String,
  rant: String,
  author: String,
  authoremail: String,
  rantId: Number,
  tstamp: Date,
  comments: [commentSchema]
});

var rant = mongoose.model('smacktalk', rantSchema);

module.exports = rant;
