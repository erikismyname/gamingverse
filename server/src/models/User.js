const { Schema, model } = require('mongoose');

const userSchema = new Schema({

    email: String,

    username: String,

    hashedPassword: String,
    
});

module.exports = model('User', userSchema);