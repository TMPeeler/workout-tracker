const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "type must be included"
            },
            name: {
                type: String,
                required: "workout must have a name"
            },
            duration: {
                type: Number,
                required: "workout must include a duration"
            },
            weight: {
                type: Number,

            },
            reps: {
                type: Number,

            },
            sets: {
                type: Number,

            },
            distance: {
                type: Number,

            },
        }],

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;



