var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var path = require('path');

app.set('port', 3000);
app.use(cookieParser());

var index = require('./routes/index.js');
app.use('/', index);
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

app.get('/signin', function(req, res){
  console.log('signing in...');
  res.cookie('name', 'justin');
  res.render('signin-bounce');
})

app.get('/signout', function(req, res){
  console.log('signed out!');
  res.clearCookie('name');
  res.send("Signed Out.<html><body><a href='/'>Homepage</a></body></html>");
  console.log('cookie: ', res.cookie.name);
})

app.listen(app.get('port'));
