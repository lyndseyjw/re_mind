const { Schema, model } = require('mongoose');

const socialSchema = new Schema({
    minutesEngaged: {
        type: Number,
    },
    createdAt: {
        type: String,
        default: Date,
    }
})


const Social = model('Social', socialSchema);

module.exports = Social;