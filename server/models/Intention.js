const { Schema, model } = require('mongoose');

const intentionSchema = new Schema ({
    intentionText: {
        type: String,
        maxlength: 280,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Intention = model('Intention', intentionSchema);

module.exports = Intention;