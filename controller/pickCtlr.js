var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;

module.exports.getAllPicks = function(req, res) {
  var db = dbconn.get();
  var collection = db.collection('schedules');
  collection
  .find({
    //null
  }, { homeTeam: 1, awayTeam: 1, homePick:1, awayPick:1})
  .toArray(function(err, docs){
    console.log("Found Full schedule");
    res.json(docs);
  });
}

module.exports.getMyPicks = function(req, res) {
  var db = dbconn.get();
  var collection = db.collection('schedules');
  var user = req.params.user;
  var week = req.params.weeknum;
  console.log("User: " + user + " Week#: " + week);
  collection
  .find({
    $or: [
        { 'picks.home': req.params.user},
        { 'picks.away': req.params.user}
      ],
      'week': parseInt(week, 10)
  }, { homeTeam: 1, awayTeam: 1, matchid:1, picks:1})
  ////////////   How to only show my pick team???? /////////////////
  .toArray(function(err, docs){
    console.log("Found Full schedule");
    res.json(docs);
  });
}
