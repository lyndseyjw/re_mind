const { Schema, model } = require('mongoose');

const intentionSchema = new Schema ({
    intentionText: {
        type: String,
        maxlength: 280,
        trim: true,
    },
    createdAt: {
        type: String,
        default: Date,
    }
})

const Intention = model('Intention', intentionSchema);

module.exports = Intention;