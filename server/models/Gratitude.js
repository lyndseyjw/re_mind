const { Schema, model } = require('mongoose');


const gratitudeSchema = new Schema ({
    gratitudeText: {
        type: String,
        maxlength: 280,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    }
})

const Gratitude = model('Gratitude', gratitudeSchema);

module.exports = Gratitude;