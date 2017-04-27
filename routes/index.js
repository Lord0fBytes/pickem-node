var express = require('express');
var router = express.Router();
//var cookieParser = require('cookie-parser');

//router.use(cookieParser());

router.use('/api', function(req, res){
  res.json({
    name:req.cookies.name,
    url: "something"
  });
})

module.exports = router;
