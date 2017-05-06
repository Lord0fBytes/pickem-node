var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  username: String,
  pswd_hash: String,
  phone: String,
  alerts: Boolean,
  stats: {
    wins: Number,
    losses: Number,
    weeks: Number,
    rants: Number,
    comments: Number
  },
  recovery: String,
  last_login: String,
  ip_address: String
});

var user = mongoose.model('users', userSchema);

module.exports = user;
