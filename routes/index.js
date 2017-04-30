var express = require('express');
var router = express.Router();

var ctlrAPI = require('../controller/apiController.js');
var schAPI = require('../controller/scheduleCtlr.js');

router.get('/picks/:weeknum', ctlrAPI.getAllPicks);

router.get('/picks/:user/:weeknum', ctlrAPI.getMyPicks);

//Schedule APIs
router.get('/schedule', schAPI.showSchedule);
router.get('/schedule/:team([a-z]{2,4})', schAPI.showTeamSchedule);
router.get('/schedule/:week([0-9])', schAPI.showWeekSchedule);

//Live Score APIs
router.get('/schedule/liveg/', schAPI.showLive);

//Standing APIs


//SmackTalk APIs


//Invalid URL
router.get('*', function(req, res){
  res.send("Sorry, page not found");
});

module.exports = router;
