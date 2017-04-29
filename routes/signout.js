var express = require('express');
var router = express.Router();

/*router
  .route('/signout')
  .get(function(req, res){
    console.log('signed out!');
    res.clearCookie('name');
    res.send("Signed Out.<html><body><a href='/'>Homepage</a></body></html>");
    console.log('cookie: ', res.cookie.name);
  });*/

  router.get('/', function(req, res){
    res.send("root");
  })

  router.get('/error', function(req, res){
    res.send("error");
  })

module.exports = router;
