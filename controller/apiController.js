var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;

module.exports.getAllPicks = function(req, res) {
  res.send("Returning all picks for week " + req.params.weeknum);
};

module.exports.getMyPicks = function(req, res) {
  res.send("Returning " + req.params.user + " picks for week " + req.params.weeknum);
};
