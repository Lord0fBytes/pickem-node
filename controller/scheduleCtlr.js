var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;


module.exports.showSchedule = function(req, res){
  var db = dbconn.get();
  var collection = db.collection('schedules');
  collection
  .find()
  .toArray(function(err, docs){
    console.log("Found schedule");
    res.json(docs);
  });
}

  module.exports.showTeamSchedule = function(req, res){
    var db = dbconn.get();
    var collection = db.collection('schedules');
    collection
    .find({
      $or:
      [
        {'homeTeam': req.params.team},
        {'awayTeam': req.params.team}
      ]
    })
    .toArray(function(err, docs){
      console.log("Found schedule");
      res.json(docs);
    })
  //res.json({"test": "test"});
};

module.exports.showWeekSchedule = function(req, res){
  var db = dbconn.get();
  var collection = db.collection('schedules');
  collection
  .find({
    'week': parseInt(req.params.week, 10)
  })
  .toArray(function(err, docs){
    console.log("Found schedule", docs);
    res.json(docs);
  })
//res.json({"test": "test"});
};

module.exports.showLive = function(req, res){
  var db = dbconn.get();
  var collection = db.collection('schedules');
  collection
  .find({
    'live': { $exists: true }
  })
  .toArray(function(err, docs){
    console.log("Live games found", docs);
    res.json(docs);
  })
//res.json({"test": "test"});
};
