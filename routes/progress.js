let Progress = require('../models/models/progress');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let uriUtil = require('mongodb-uri');

mongoose.connect('mongodb://localhost:27017/workoutdb');
var mongodbUri = 'mongodb://mpeder:NAVY1991@ds143293.mlab.com:43293/workoutdb';
mongoose.connect(mongodbUri);

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

    Progress.find(function(err, progress) {
        if (err)
            res.send(err);

        res.send(JSON.stringify(progress,null,5));
    });
};

router.findOne = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    Progress.find({ "_id" : req.params.id },function(err, progress) {
        if (err)
            res.json({ message: 'Progress NOT Found!', errmsg : err } );
        else
            res.send(JSON.stringify(progress,null,5));
    });
};


router.addProgress = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    var progress = new Progress();

    progress.dateText = req.body.date;
    progress.genderText = req.body.gender;
    progress.ageText = req.body.age;
    progress.weightText = req.body.weight;
    progress.heightText = req.body.height;
    progress.waistText = req.body.waist;


    progress.save(function(err) {
        if (err)
            res.json({ message: 'Progress NOT Added!', errmsg : err } );
        else
            res.json({ message: 'Progress Successfully Added!', data: progress });
    });
};

router.updateProgress = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Progress.findByIdAndUpdate(req.params.id,
        {$push: {date: req.body.dateText, gender: req.body.genderText, age: req.body.ageText, weight: req.body.weightText, height: req.body.heightText, waist: req.body.waistText}},
        function (err, progress) {
            if (err)
                res.json({ message: 'Workout NOT Added!', errmsg : err } );
            else
                res.json({ message: 'Workout Successfully Added!', data: progress });
        }
    );
};





router.deleteProgress = (req, res) => {

    Progress.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.json({ message: 'Progress not deleted', errmsg : err } );
        else
            res.json({ message: 'Progress Successfully Deleted!'});
    });
};


module.exports = router;
