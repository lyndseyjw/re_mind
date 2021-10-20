const { Schema, model } = require('mongoose');

const waterSchema = new Schema ({
    cups: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

// waterSchema.pre('aggregate', function() {
//     this.group({ cups, count: { $sum: 1}})
// })

const Water = model('Water', waterSchema);

module.exports = Water;