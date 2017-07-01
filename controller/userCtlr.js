var mongoose = require('mongoose');
var User = mongoose.model('users');

module.exports.getUser = function(req, res){
  console.log("getting user ", req.params.user);
  User
  .find({
    'username':req.params.username
  })
  .exec(function(err, user) {
    console.log(err);
    console.log(user);
    if (err) {
      console.log("Error finding user");
      res
        .status(500)
        .json(err);
    } else {
      console.log("Found user", user.username);
      res
        .json(user);
    }
  });
};

module.exports.addWinUser = function(req, res) {
  console.log("Adding wins to user", req.params.user);
  User
  .findOneAndUpdate(
    {user: req.params.user},
    {$set:{"stats.wins" : 0/*, losses:0, weeks:0, rants:0, comments: 0*/}},
    function(err, doc){
      if(err){
        console.log("Error adding wins");
      }
      console.log(doc);
    }
  )

};

module.exports.postAddUser = function(req, res){
  console.log("Creating new user...");
  User
    .create({
      /*Create the user*/
      first_name: req.body.fname,
      last_name: req.body.lname,
      email: req.body.email,
      username: req.body.username,
      pswd_hash: "XXXXXXXXXXXX",
      alerts: 1,
      stats: {
        wins: 0,
        losses: 0,
        weeks: 0,
        rants: 0,
        comments: 0
      },
      ip_address: req.headers['x-forward-for']
    }, function(err, user){
      if (err){
        console.log('Error creating user');
        res
          .status(400)
          .json(err)
      }
      else{
        console.log("User created!", user);
        res
          .status(201)
          .json(user);
      }
    })
};

module.exports.getStandings = function(req, res){
  User
    .find({}, {stats:1})
    .exec(function(err, stats) {
      if(err){
        console.log("Error getting stats");
        res
          .status(400)
          .json(err);
      }
      else{
        console.log("Stat here");
        res
          .status(201)
          .json(stats);
      }
    });
};

module.exports.getAllUsers = function(req, res){
  User
    .find({})
    .exec(function(err, users) {
      if(err){
        console.log("Error getting users");
        res
          .status(400)
          .json(err);
      }
      else {
        console.log("Getting Users");
        res
          .status(201)
          .json(users);
      }
    });
}
