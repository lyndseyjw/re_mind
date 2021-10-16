const { Schema, model } = require('mongoose');

const waterSchema = new Schema ({
    cups: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Water = model('Water', waterSchema);

module.exports = Water;