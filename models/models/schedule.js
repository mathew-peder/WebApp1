let mongoose = require('mongoose');

/*
Schema for the Schedule collection which is an array for each day of the week.
 */
let ScheduleSchema = new mongoose.Schema({
    Weekly: [{
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
    }]
    },
    { collection: 'schedule' });

module.exports = mongoose.model('Schedule', ScheduleSchema);



