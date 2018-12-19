/*
This code was referenced from the code given to us in the lab and changed/updated as needed with my own code to suit the application.
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var progressRouter = require('./routes/progress');
var scheduleRouter = require('./routes/schedule');
const progress = require("./routes/progress");
const schedule = require("./routes/schedule");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/progress', progressRouter);
app.use('/schedule', scheduleRouter);

app.get('/progress', progress.findAll);
app.get('/schedule', schedule.findAll);
app.get('/progress/:id', progress.findOne);
app.get('/schedule/:id', schedule.findOne);
app.post('/progress', progress.addProgress);
app.post('/schedule', schedule.addSchedule);
app.post('/progress/', progress.addProgress);
app.put('/progress/:id', progress.updateProgress);
app.put('/schedule/Weekly/Sunday/:id', schedule.updateSunday);
app.put('/schedule/Weekly/Monday/:id', schedule.updateMonday);
app.put('/schedule/Weekly/Tuesday/:id', schedule.updateTuesday);
app.put('/schedule/Weekly/Wednesday/:id', schedule.updateWednesday);
app.put('/schedule/Weekly/Thursday/:id', schedule.updateThursday);
app.put('/schedule/Weekly/Friday/:id', schedule.updateFriday);
app.put('/schedule/Weekly/Saturday/:id', schedule.updateSaturday);
app.delete('/progress/:id', progress.deleteProgress);
app.delete('/schedule/:id', schedule.deleteSchedule);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
