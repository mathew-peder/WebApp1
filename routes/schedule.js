let Schedule = require('../models/models/schedule');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let uriUtil = require('mongodb-uri');


mongoose.connect('mongodb://localhost:27017/workoutdb');
var mongodbUri = 'mongodb://mpeder:NAVY1991@ds143293.mlab.com:43293/workoutdb';
mongoose.connect(mongodbUri);

let db = mongoose.connection;

db.on('error', function (err)
{
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function ()
{
    console.log('Successfully Connected to [ ' + db.name + ' ] on mlab.com');
});

router.findAll = (req, res) =>
{
    // Return a JSON representation of our list
    res.setHeader('Content-Type', 'application/json');

    Schedule.find(function(err, schedule) {
        if (err)
            res.send(err);

        res.send(JSON.stringify(schedule,null,5));
    });
};

router.findOne = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    Schedule.find({ "_id" : req.params.id },function(err, schedule) {
        if (err)
            res.json({ message: 'Schedule NOT Found!', errmsg : err } );
        else
            res.send(JSON.stringify(schedule,null,5));
    });
};

router.updateSunday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {sunday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.updateMonday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {monday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.updateTuesday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {tuesday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.updateWednesday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {wednesday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.updateThursday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {thursday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.updateFriday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {friday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.updateSaturday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {saturday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.addSchedule = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    var schedule = new Schedule();


    schedule.save(function(err) {
        if (err)
            res.json({ message: 'Schedule NOT Added!', errmsg : err } );
        else
            res.json({ message: 'New Schedule Successfully Added!', data: schedule });
    });
};



router.deleteSchedule = (req, res) => {

    Schedule.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.json({ message: ' NOT DELETED!', errmsg : err } );
        else
            res.json({ message: 'Successfully Deleted!'});
    });
};

module.exports = router;
