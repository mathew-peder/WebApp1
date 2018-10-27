let mongoose = require('mongoose');

let ProgressSchema = new mongoose.Schema({
        date: {type: String, default: "2018-10-27"},
        gender: {type: String, default: ""},
        age: {type: Number, default: 0},
        weight: {type: Number, default: 0},
        height: {type: Number, default: 0},
        waist: {type: Number, default: 0}
    },
    { collection: 'progress' });

module.exports = mongoose.model('Progress', ProgressSchema);

