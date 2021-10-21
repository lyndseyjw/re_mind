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

// waterSchema.pre('aggregate', function() {
//     this.group({ cups, count: { $sum: 1}})
// })

const Water = model('Water', waterSchema);

module.exports = Water;