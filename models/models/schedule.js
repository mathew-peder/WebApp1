let mongoose = require('mongoose');

let ScheduleSchema = new mongoose.Schema({
        sunday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
                }],
        monday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        tuesday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        wednesday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        thursday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        friday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }],
        saturday: [{
            workout: {type: String, default: ""},
            reps: {type: Number, default: 0}
        }]

    },
    { collection: 'schedule' });

module.exports = mongoose.model('Schedule', ScheduleSchema);



