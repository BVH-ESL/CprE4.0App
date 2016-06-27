var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var wss = require('./js/wsRFIDReadder');
// var RFIDReadder = require('./vendor/readRFIDSerial');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', routes);
// app.use('/', wss);
app.use("/js",express.static(__dirname + "/js"));
app.use("/node_modules",express.static(__dirname + "/node_modules"));
app.use("/test",express.static(__dirname + "/test"));
// app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;

var server = app.listen(3000, function() {
    console.log('Express.js is running...');
});
