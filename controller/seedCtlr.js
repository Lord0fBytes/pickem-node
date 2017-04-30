var schedule = require('../models/scheduleModel');

module.exports = function(app) {
  app.get('/api/seedSchedule', function(req, res) {
    var seedData = [
    { id: 1,
      homeTeam: 'pats',
      awayTeam: 'stl',
      date: '2016-1-2',
      week: 1,
      matchid: 1 },
    { id: 2,
      homeTeam: 'lon',
      awayTeam: 'pit',
      date: '2016-1-4',
      week: 1,
      matchid: 2 },
    { id: 3,
      homeTeam: 'nyj',
      awayTeam: 'nyg',
      date: '2016-1-4',
      week: 1,
      matchid: 3 },
    { id: 4,
      homeTeam: 'pats',
      awayTeam: 'nyg',
      date: '2016-2-4',
      week: 2,
      matchid: 4 },
    { id: 5,
      homeTeam: 'nyj',
      awayTeam: 'pit',
      date: '2016-2-10',
      week: 2,
      matchid: 5 } ];
    schedule.create(seedData, function(err, results){
      res.send(results);
    });
  });
}
