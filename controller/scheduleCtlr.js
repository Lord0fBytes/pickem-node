var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;


module.exports.showSchedule = function(req, res){
  var db = dbconn.get();
  var collection = db.collection('schedule2');
  collection
  .find()
  .toArray(function(err, docs){
    console.log("Found Full schedule");
    res.json(docs);
  });
}

  module.exports.showTeamSchedule = function(req, res){
    var db = dbconn.get();
    var collection = db.collection('schedule2');
    collection
    .find({
      $or:
      [
        {'homeTeam': req.params.team},
        {'awayTeam': req.params.team}
      ]
    })
    .toArray(function(err, docs){
      console.log("Found Team schedule", docs.length);
      if(0 < docs.length){
        res.json(docs);
      }
      else {
        res.send("Bad Request: No team schedules");
      }
    })
};

module.exports.showWeekSchedule = function(req, res){
  var db = dbconn.get();
  var collection = db.collection('schedule2');
  var weeknum = req.params.week;
  collection
  .find({
    'gameWeek': weeknum.toString()
  })
  .sort({gameId:1})
  .toArray(function(err, docs){
    console.log("Found weekly schedule", docs.length);
    if(0 < docs.length){
      res.json(docs);
    }
    else {
      res.send("Bad Request: No schedule for this week");
    }
  })
};
