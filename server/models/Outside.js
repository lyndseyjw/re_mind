const { Schema, model } = require('mongoose');

const outsideSchema = new Schema ({
    minutesOutside: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Outside = model('Outside', outsideSchema);

module.exports = Outside;