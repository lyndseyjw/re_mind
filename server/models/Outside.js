const { Schema, model } = require('mongoose');

const outsideSchema = new Schema ({
    minutesOutside: {
        type: Number,
    },
    createdAt: {
        type: String,
        default: Date,
    }
})

const Outside = model('Outside', outsideSchema);

module.exports = Outside;