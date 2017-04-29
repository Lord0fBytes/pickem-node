var express = require('express');
var router = express.Router();
<<<<<<< HEAD

var ctlrAPI = require('../controller/apiController.js');

router.get('/picks/:weeknum', ctlrAPI.getAllPicks);

router.get('/picks/:user/:weeknum', ctlrAPI.getMyPicks);
=======
//var cookieParser = require('cookie-parser');

//router.use(cookieParser());

router.use('/api', function(req, res){
  res.json({
    name:req.cookies.name,
    url: "something"
  });
})
>>>>>>> 7bb1ff9426574278904b805ef3784c22f2efd312

module.exports = router;
