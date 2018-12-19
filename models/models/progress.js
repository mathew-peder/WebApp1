let mongoose = require('mongoose');

/*
Schema for the Progress collection.
 */
let ProgressSchema = new mongoose.Schema({
        date: {type: String, default: "2018-10-27"},
        gender: {type: String, default: "M"},
        age: {type: Number, default: 20},
        weight: {type: Number, default: 70},
        height: {type: Number, default: 70},
        waist: {type: Number, default: 30},
    },
    { collection: 'progress' });

module.exports = mongoose.model('Progress', ProgressSchema);


