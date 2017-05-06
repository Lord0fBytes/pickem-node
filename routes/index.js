var express = require('express');
var router = express.Router();

var ctlrAPI = require('../controller/apiController.js');
var schAPI = require('../controller/scheduleCtlr.js');
var liveAPI = require('../controller/liveCtlr.js');
var picksAPI = require('../controller/pickCtlr.js');
var rantAPI = require('../controller/rantCtlr.js');

//Picks APIs
router.get('/picks/:weeknum', picksAPI.getAllPicks);
router.get('/picks/:user/:weeknum', picksAPI.getMyPicks);

//Schedule APIs
router.get('/schedule', schAPI.showSchedule);
router.get('/schedule/:team([A-Z]{2,3})', schAPI.showTeamSchedule);
router.get('/schedule/:week([0-9]{1,2})', schAPI.showWeekSchedule);

//Live Score APIs
router.get('/schedule/live/', liveAPI.showLive);

//Standing APIs


//SmackTalk APIs
router.get('/smacktalk', rantAPI.getForumList);
router.get('/smacktalk/:id', rantAPI.getForumOne);
router.post('/smacktalk/:id', rantAPI.postNewRant);
router.put('/smacktalk/:id', rantAPI.putUpdateRant);
router.put('/smacktalk/:id', rantAPI.delRemoveRant);

//Invalid URL
router.get('*', function(req, res){
  res.send("Sorry, page not found");
});

module.exports = router;
