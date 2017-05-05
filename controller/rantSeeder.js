var rant = require('../models/rantModel');

module.exports = function(app) {
  app.get('/api/seedRant', function(req, res) {
    var seedData = [
      {
        "title": "Test Rant #1 About Patriots",
        "rant": "This should normally be a long rant about how the patriots are the best NFL team.",
        "author": "Justin Masse",
        "authoremail": "jmasse@webtron.me",
        "rantId": 1,
        "tstamp": "2017-05-04 23:00",
        "comments": [
          {
            "commentId": 1,
            "commentAuthor": "Justin Masse",
            "comment": "I would tend to agree with that statement",
            "tstamp": "2017-05-04 23:02"
          }
        ]
      },
      {
        "title": "Test Rant #2 about possible formatting in blog",
        "rant": "I wonder how tough it would be to allow for formatting in this type of a rant.",
        "author": "Justin Masse",
        "authoremail": "jmasse@webtron.me",
        "rantId": 2,
        "tstamp": "2017-05-04 23:03",
        "comments": [
          {
            "commentId": 1,
            "commentAuthor": "Justin Masse",
            "comment": "Hopeefully it will not be hard",
            "tstamp": "2017-05-04 23:04"
          },
          {
            "commentId": 2,
            "commentAuthor": "Someone Else",
            "comment": "That's not what she said...XD",
            "tstamp": "2017-05-04 23:06"
          }
        ]
      }
    ];
   rant.create(seedData, function(err, results){
     if(err) throw err;
     res.send(results);
   });
 });
}
