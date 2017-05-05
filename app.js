var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var path = require('path');
var routes = require('./routes');
var signout = require('./routes/signout');
var mysql = require('mysql');
var mongoose = require('mongoose');
var seedCtlr = require('./controller/seedCtlr.js');
var scheduleSeeder = require('./controller/scheduleModel.js');
require('./data/dbconnection.js').open();
var dburl = require('./data/dbconnection.js');

app.set('port', 3000);
app.use(cookieParser());

//set views
//app.set('views', path(__dirname, 'views'));
app.set('view engine', 'pug');

//Routing
app.get('/', function(req, res){
  console.log('Cookies Name: ', req.cookies);
  if(req.cookies.name){
    res.render('index', {
      name: req.cookies.name
    });
  }
  else{
    res.render('signin');
  }
})

//connect to database
mongoose.connect(dburl.url());
//seed the database @ /api/seedSchedule//
//seedCtlr(app);
scheduleSeeder(app);

app.use('/api', routes);
app.use('/sys', signout);

app.listen(app.get('port'));
