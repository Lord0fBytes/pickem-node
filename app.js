var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var path = require('path');

app.set('port', 3000);
app.use(cookieParser());

//set views
//app.set('views', path(__dirname, 'views'));
app.set('view engine', 'pug');

//Routing
app.get('/', function(req, res){
  console.log('Cookies Name: ', req.cookies);
  if(req.cookies.name){
    res.render('index');
  }
  else{
    res.render('signin');
  }
})

app.get('/signin', function(req, res){
  console.log('signing in...');
  res.cookie('name', 'justin').send('cookie sent');
})

app.get('/signout', function(req, res){
  console.log('signed out!');
  res.clearCookie('name');
  res.send("Signed Out.");
  console.log('cookie: ', res.cookie.name);
})

app.listen(app.get('port'));
