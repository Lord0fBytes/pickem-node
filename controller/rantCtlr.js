var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;


module.exports.getForumList = function(req, res){
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

module.exports.getForumOne = function(req, res){
  var db = dbconn.get();
  var collection = db.collection('smacktalks');
  collection
  .find({
    'rantId': parseInt(req.params.id, 10)
  })
  .toArray(function(err, docs){
    console.log("Single Form Loaded");
    res.json(docs);
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
