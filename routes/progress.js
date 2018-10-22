let Progress = require('../models/models/progress');
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

    Progress.find(function(err, progress) {
        if (err)
            res.send(err);

        res.send(JSON.stringify(progress,null,5));
    });
}

router.findOne = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    Progress.find({ "_id" : req.params.id },function(err, progress) {
        if (err)
            res.json({ message: 'Donation NOT Found!', errmsg : err } );
        else
            res.send(JSON.stringify(progress,null,5));
    });
}


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
            res.json({ message: 'Donation NOT Added!', errmsg : err } );
        else
            res.json({ message: 'Donation Successfully Added!', data: progress });
    });
}



router.deleteProgress = (req, res) => {

    Progress.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.json({ message: 'Donation NOT DELETED!', errmsg : err } );
        else
            res.json({ message: 'Donation Successfully Deleted!'});
    });
}


module.exports = router;
