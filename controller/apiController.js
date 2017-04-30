var dbconn = require('../data/dbconnection.js');

module.exports.getAllPicks = function(req, res) {
  res.send("Returning all picks for week " + req.params.weeknum);
};

module.exports.getMyPicks = function(req, res) {
  res.send("Returning " + req.params.user + " picks for week " + req.params.weeknum);
};

module.exports.showSchedule = function(req, res){
  var db = dbconn.get();

  res.json({"test": "test"});
}
