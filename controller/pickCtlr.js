var mongoose = require('mongoose');
var Picks = mongoose.model('schedule2');

module.exports.getAllPicks = function(req, res) {
  Picks
  .find({
    //null
  }, { homeTeam: 1, awayTeam: 1, homePick:1, awayPick:1})
  .exec(function(err, picks) {
    console.log(err);
    console.log(picks);
    if (err) {
      console.log("Error finding picks");
      res
        .status(500)
        .json(err);
    } else {
      console.log("Found picks", picks.username);
      res
        .json(picks);
    }
  });
}

//Grabs only the logged in users team//
module.exports.getMyPicks = function(req, res) {
  var user = req.params.user;
  var week = req.params.weeknum;
  console.log("User: " + user + " Week#: " + week);
  Picks
  .find({
    'picks.user': user,
    'week': parseInt(week, 10)
  }, { homeTeam: 1, awayTeam: 1, matchid:1, picks:{$elemMatch: {user: user}}})
  .exec(function(err, picks) {
    console.log(err);
    console.log(picks);
    if (err) {
      console.log("Error finding picks");
      res
        .status(500)
        .json(err);
    } else {
      console.log("Found picks", picks.username);
      res
        .json(picks);
    }
  });
}
