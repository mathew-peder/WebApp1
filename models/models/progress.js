let mongoose = require('mongoose');

/*
Schema for the Progress collection.
 */
let ProgressSchema = new mongoose.Schema({
        Date: {type: String, default: "2018-10-27"},
        Gender: {type: String, default: ""},
        Age: {type: Number, default: 0},
        Weight: {type: Number, default: 0},
        Height: {type: Number, default: 0},
        Waist: {type: Number, default: 0}
    },
    { collection: 'progress' });

module.exports = mongoose.model('Progress', ProgressSchema);

