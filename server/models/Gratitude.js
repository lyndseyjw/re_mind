const { Schema, model } = require('mongoose');


const gratitudeSchema = new Schema ({
    gratitudeText: {
        type: String,
        maxlength: 280,
        trim: true,
    },
    createdAt: {
        type: String,
        default: Date, 
    }
})

const Gratitude = model('Gratitude', gratitudeSchema);

module.exports = Gratitude;