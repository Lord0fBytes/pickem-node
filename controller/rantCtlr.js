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
  var db = dbconn.get();
  var collection = db.collection('smacktalks');
  var skip = 0;
  var limit = 5;
  collection
  .find()
  .skip(skip)
  .limit(limit)
  .toArray(function(err, docs){
    console.log("Full Forum Details");
    res.json(docs);
  });
};

module.exports.putUpdateRant = function(req, res){

};
module.exports.delRemoveRant = function(req, res){

};
