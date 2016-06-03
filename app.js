var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var indexRouter = require('./server/routes/index.js');
var haikuRouter = require('./server/routes/api/haiku_api.js');
var path = require('path');

var app = express();


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/haiku_app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/haikus', haikuRouter);



var port = process.env.PORT || 3000;
app.listen( port, function() {
  console.log("lets do it at 3000");
});


module.exports = app
