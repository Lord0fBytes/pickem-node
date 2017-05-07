var mongoose = require('mongoose');
var Schedule = mongoose.model('schedule2');


module.exports.showSchedule = function(req, res){
  Schedule
  .find()
  .exec(function(err, schedule) {
    console.log(err);
    console.log(schedule);
    if (err) {
      console.log("Error finding schedules");
      res
        .status(500)
        .json(err);
    } else {
      console.log("Found schedule", schedule.length);
      res
        .json(schedule);
    }
  });
}

  module.exports.showTeamSchedule = function(req, res){
    Schedule
    .find({
      $or:
      [
        {'homeTeam': req.params.team},
        {'awayTeam': req.params.team}
      ]
    })
    .exec(function(err, schedule) {
      console.log(err);
      console.log(schedule);
      if (err) {
        console.log("Error finding schedules");
        res
          .status(500)
          .json(err);
      } else {
        console.log("Found schedule", schedule.length);
        res
          .json(schedule);
      }
    });
};

module.exports.showWeekSchedule = function(req, res){
  var weeknum = req.params.week;
  Schedule
  .find({
    'gameWeek': weeknum.toString()
  })
  .sort({gameId:1})
  .exec(function(err, schedule) {
    console.log(err);
    console.log(schedule);
    if (err) {
      console.log("Error finding schedules");
      res
        .status(500)
        .json(err);
    } else {
      console.log("Found schedule", schedule.length);
      res
        .json(schedule);
    }
  });
};
