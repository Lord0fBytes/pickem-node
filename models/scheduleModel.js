var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
  homeTeam: String,
  awayTeam: String,
  date: String,
  week: Number,
  matchid: Number
});

var schedule = mongoose.model('schedule', scheduleSchema);

module.exports = schedule;
