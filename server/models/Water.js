const { Schema, model } = require('mongoose');

const waterSchema = new Schema ({
    cups: {
        type: Number,
    },
    createdAt: {
        type: String,
        default: Date,
    }
})

// hook to convert createdAt into simplified date (otherwise will be unix)?

// waterSchema.pre('aggregate', function() {

// })

const Water = model('Water', waterSchema);

module.exports = Water;