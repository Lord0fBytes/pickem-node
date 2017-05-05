var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var picksSchema = new Schema({
  user: String,
  team: String
});

/*var scheduleSchema = new Schema({
  homeTeam: String,
  awayTeam: String,
  picks: [picksSchema],
  date: String,
  week: Number,
  matchid: Number,
  live: {
    score: {
      a: Number,
      h: Number
    },
    time: String,
    qtr: Number
  },
  winner: String
});*/

var scheduleSchema = new Schema({
  gameId: String,
  gameWeek: String,
  gameDate: String,
  awayTeam: String,
  homeTeam: String,
  gameTimeET: String,
  tvStation: String,
  winner: String
});

//To add Live or not to the above schema//

var schedule = mongoose.model('schedule2', scheduleSchema);

module.exports = schedule;
