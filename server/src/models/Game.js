const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    title: String,
    description: String,
    imageURL: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    orderedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Game', gameSchema);