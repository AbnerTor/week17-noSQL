const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            enum: ['resistance', 'cardio'],
            require: true
        },
        type: {
            type: String,
            trim: true,
            require: true
        },
        weight: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0,
        },
        duration: {
            type: Number,
            require: true,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        }
    }]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;