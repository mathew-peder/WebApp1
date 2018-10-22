let mongoose = require('mongoose');

let ScheduleSchema = new mongoose.Schema({
        Sunday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
                }],
        Monday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        Tuesday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        Wednesday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        Thursday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        Friday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        Saturday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }]

    },
    { collection: 'schedule' });

module.exports = mongoose.model('Schedule', ScheduleSchema)



