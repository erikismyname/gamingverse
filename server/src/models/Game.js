const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    name: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    genre: [{
        type: String,
    }],
    platform: [{
        type: String,
    }],
    description: {
        type: String,
    },
    year: {
        type: Number,
    },
    price: {
        type: Number,
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    boughtBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Game', gameSchema);