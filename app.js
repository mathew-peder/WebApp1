var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var progressRouter = require('./routes/progress');
var scheduleRouter = require('./routes/schedule')
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
app.use('/schedule', scheduleRouter)

app.get('/progress', progress.findAll);
app.get('/schedule', schedule.findAll);
app.post('/progress', progress.addProgress);
app.post('/schedule', schedule.addSchedule);
app.put('/schedule/Sunday/:id', schedule.addSunday)
app.put('/schedule/Monday/:id', schedule.addMonday)
app.put('/schedule/Tuesday/:id', schedule.addTuesday)
app.put('/schedule/Wednesday/:id', schedule.addWednesday)
app.put('/schedule/Thursday/:id', schedule.addThursday)
app.put('/schedule/Friday/:id', schedule.addFriday)
app.put('/schedule/Saturday/:id', schedule.addSatday)


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
