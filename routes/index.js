var express = require('express');
var router = express.Router();

var ctlrAPI = require('../controller/apiController.js');
var schAPI = require('../controller/scheduleCtlr.js');
var liveAPI = require('../controller/liveCtlr.js');
var picksAPI = require('../controller/pickCtlr.js');
var rantAPI = require('../controller/rantCtlr.js');
var userAPI = require('../controller/userCtlr.js');
var commentAPI = require('../controller/commentCtlr.js');

//Picks APIs
router.get('/picks/:weeknum', picksAPI.getAllPicks); //DONE
router.get('/picks/:user/:weeknum', picksAPI.getMyPicks); //DONE
router.get('/picks/:user/:weeknum')

//Schedule APIs
router.get('/schedule', schAPI.showSchedule); //DONE
router.get('/schedule/:team([A-Z]{2,3})', schAPI.showTeamSchedule); //DONE
router.get('/schedule/:week([0-9]{1,2})', schAPI.showWeekSchedule); //DONE

//Live Score APIs
router.get('/schedule/live/', liveAPI.showLive); //DONE

//Standing APIs
router.get('/standings', userAPI.getStandings);

//SmackTalk APIs
router.get('/smacktalk', rantAPI.getForumList); //DONE
router
  .get('/smacktalk/:id', rantAPI.getForumOne) //DONE
  .put('/smacktalk/:id', rantAPI.putUpdateRant)
  .delete('/smacktalk/:id', rantAPI.delRemoveRant);
router.post('/smacktalk/', rantAPI.postNewRant);
//Comments APIs
router
  .get('/smacktalk/:id/comment/:commentId', commentAPI.getComment)
  .put('/smacktalk/:id', commentAPI.putUpdateComment)
  .delete('/smacktalk/:id', commentAPI.delRemoveComment);
router.post('/smacktalk/:id/comment', commentAPI.postNewComment);

//User APIs
router.get('/users/:username', userAPI.getUser); //DONE
router.post('/users', userAPI.postAddUser); //DONE

//Invalid URL
router.get('*', function(req, res){
  res.send("Sorry, page not found");
});

module.exports = router;
