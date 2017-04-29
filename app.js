var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var path = require('path');
var routes = require('./routes');
var signout = require('./routes/signout');
var mysql = require('mysql');

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

app.use('/sql', function(req, res, next){
  console.log("SQL Data");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "pickem"
  });
  con.query('SELECT * FROM schedule', function(err, rows){
      if(err) throw err;
        console.log(rows);
  });
  res.send("Check console logs");
  next();
})

app.use('/api', routes);
app.use('/sys', signout);



app.listen(app.get('port'));
