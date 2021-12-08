const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String,
    username: String,
    hashedPassword: String,
    offeredGames: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    orderedGames: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
});

module.exports = model('User', userSchema);