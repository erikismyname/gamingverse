const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    hashedPassword: {
        type: String,
    }
});