var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;

//NEED TO CONVERT TO MONGOOSE //

module.exports.showLive = function(req, res){
  var db = dbconn.get();
  var collection = db.collection('schedules');
  collection
  .find({
    'live': { $exists: true },
  }/* How to narrow fields down*/ ,{live: 1, homeTeam: 1, awayTeam: 1})
  .toArray(function(err, docs){
    console.log("Live games found", docs);
    res.json(docs);
  })
};
