const { Schema, model } = require('mongoose');

const sleepSchema = new Schema({
    hoursSlept: {
        type: Number,
    },
    createdAt: {
        type: String,
        default: Date,
    }
})


const Sleep = model('Sleep', sleepSchema);

module.exports = Sleep;