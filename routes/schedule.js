let Schedule = require('../models/models/schedule');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let uriUtil = require('mongodb-uri');


mongoose.connect('mongodb://localhost:27017/workoutdb');

let db = mongoose.connection;

db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ] on mlab.com');
});

router.findAll = (req, res) => {
    // Return a JSON representation of our list
    res.setHeader('Content-Type', 'application/json');

    Schedule.find(function(err, schedule) {
        if (err)
            res.send(err);

        res.send(JSON.stringify(schedule,null,5));
    });
}

router.findOne = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    Schedule.find({ "_id" : req.params.id },function(err, schedule) {
        if (err)
            res.json({ message: 'Donation NOT Found!', errmsg : err } );
        else
            res.send(JSON.stringify(schedule,null,5));
    });
}

router.addSunday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {Sunday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.addMonday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {Monday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.addTuesday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {Tuesday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.addWednesday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {Wednesday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.addThursday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {Thursday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.addFriday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {Friday: {workout: req.body.workoutText, reps: req.body.repText}}},
        function (err, schedule) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: schedule });
        }
    );
};

router.addSaturday = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Schedule.findByIdAndUpdate(req.params.id,
        {$push: {Saturday: {workout: req.body.workoutText, reps: req.body.repText}}},
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
            res.json({ message: 'Donation NOT Added!', errmsg : err } );
        else
            res.json({ message: 'Donation Successfully Added!', data: schedule });
    });
}



router.deleteSchedule = (req, res) => {

    Schedule.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.json({ message: 'Donation NOT DELETED!', errmsg : err } );
        else
            res.json({ message: 'Donation Successfully Deleted!'});
    });
}


module.exports = router;
