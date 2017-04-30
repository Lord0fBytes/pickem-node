var express = require('express');
var router = express.Router();

var ctlrAPI = require('../controller/apiController.js');

router.get('/picks/:weeknum', ctlrAPI.getAllPicks);

router.get('/picks/:user/:weeknum', ctlrAPI.getMyPicks);

router.get('/schedule', ctlrAPI.showSchedule);

module.exports = router;
