let mongoose = require('mongoose');

let ProgressSchema = new mongoose.Schema({
        Date: {type: Number, default: 0},
        Gender: {type: String, default: ""},
        Age: {type: Number, default: 0},
        Weight: {type: Number, default: 0},
        Height: {type: Number, default: 0},
        Waist: {type: Number, default: 0}
    },
    { collection: 'progress' });

module.exports = mongoose.model('Progress', ProgressSchema)

