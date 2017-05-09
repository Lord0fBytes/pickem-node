var mongoose = require('mongoose');
var Rant = mongoose.model('smacktalk');


module.exports.getForumList = function(req, res){
  var skip = 0;
  var limit = 5;
  Rant
  .find()
  .skip(skip)
  .limit(limit)
  .exec(function(err, rants) {
    console.log(err);
    console.log(rants);
    if (err) {
      console.log("Error finding user");
      res
        .status(500)
        .json(err);
    } else {
      console.log("Found user", rants.length);
      res
        .json(rants);
    }
  });
};

module.exports.getForumOne = function(req, res){
  Rant
  .find({
    'rantId': parseInt(req.params.id, 10)
  })
  .exec(function(err, rants) {
    console.log(err);
    console.log(rants);
    if (err) {
      console.log("Error finding user");
      res
        .status(500)
        .json(err);
    } else {
      console.log("Found user", rants.length);
      res
        .json(rants);
    }
  });
};

module.exports.postNewRant = function(req, res){
  var skip = 0;
  var limit = 5;
  Rant
  .create({
    title: req.body.title,
    rant: req.body.rant,
    author: req.body.author,
    authoremail: req.body.authorEmail
  }, function(err, rant){
    if(err) {
      console.log("Error creating rant");
      res
        .status(40)
        .json(err);
    }
    else {
      console.log("Created new rant");
      res
        .status(201)
        .json(rant);
    }
  })
};

module.exports.putUpdateRant = function(req, res){

};
module.exports.delRemoveRant = function(req, res){

};
