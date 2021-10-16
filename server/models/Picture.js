const { Schema, model } = require('mongoose');

const pictureSchema = new Schema ({
    pictureUploaded: {
        type: String,
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Picture = model('Picture', pictureSchema);

module.exports = Picture;