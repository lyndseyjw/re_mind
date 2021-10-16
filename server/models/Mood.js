const { Schema, model } = require('mongoose');

const moodSchema = new Schema ({
    moodRanking: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Mood = model('Mood', moodSchema);

module.exports = Mood;