const { Schema, model } = require('mongoose');

const pictureSchema = new Schema ({
    pictureUploaded: {
        type: String,
    }, 
    createdAt: {
        type: String,
        default: Date,
    }
})

const Picture = model('Picture', pictureSchema);

module.exports = Picture;