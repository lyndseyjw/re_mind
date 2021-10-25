const { Schema, model } = require('mongoose');

const socialSchema = new Schema({
    minutesEngaged: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})


const Social = model('Social', socialSchema);

module.exports = Social;