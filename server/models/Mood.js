const { Schema, model } = require('mongoose');

const moodSchema = new Schema ({
    moodRanking: {
        type: Number,
    },
    createdAt: {
        type: String,
        default: Date,
    }
})

const Mood = model('Mood', moodSchema);

module.exports = Mood;