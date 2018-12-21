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

/*
Finds the entire collection in a db using GET for the specified collection.
 */
router.findAll = (req, res) => {
    // Return a JSON representation of our list
    res.setHeader('Content-Type', 'application/json');

    Progress.find(function(err, progress) {
        if (err)
            res.send(err);

        res.send(JSON.stringify(progress,null,5));
    });
};

/*
Searches the db using the ID using GET and prints the found content.
 */
router.findOne = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    Progress.find({ "_id" : req.params.id },function(err, progress) {
        if (err)
            res.json({ message: 'Progress NOT Found!', errmsg : err } );
        else
            res.send(JSON.stringify(progress,null,5));
    });
};

/*
Adds the progress using POST. Adds an empty/default value for each data type and posts it to the db.
 */
router.addProgress = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    var progress = new Progress();

    progress.date = req.body.date;
    progress.gender = req.body.gender;
    progress.age = req.body.age;
    progress.weight = req.body.weight;
    progress.height = req.body.height;
    progress.waist = req.body.waist;

    progress.save(function(err) {
        if (err)
            res.json({ message: 'Progress NOT Added!', errmsg : err } );
        else
            res.json({ message: 'Progress Successfully Added!', data: progress });
    });
};

/*
Used to update progress by ID. Updates the entire progress by pushing to all the data types.
Currently having issues with PUT. Throws an error stating 'age' is an array, but it is not.
 */
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

/*
Finds the content by it's id and deletes it from the collection
 */
router.deleteProgress = (req, res) => {

    Progress.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.json({ message: 'Progress not deleted', errmsg : err } );
        else
            res.json({ message: 'Progress Successfully Deleted!'});
    });
};

module.exports = router;
