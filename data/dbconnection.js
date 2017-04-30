var mongo = require('mongodb').MongoClient;
//setup url with temp un/pw
var dburl = 'mongodb://nodejs:password@ds127341.mlab.com:27341/pickem';
var conn = null;
var open = function(){
  mongo.connect(dburl, function(err, db){
    if(err) throw err;
    conn = db;
    console.log("DB connection is open");
  });
};

var get = function(){
  return conn;
};

var url = function(){
  return dburl;
};

module.exports = {
  open: open,
  get: get,
  url: url
};
