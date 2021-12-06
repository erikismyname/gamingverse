const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: [String, 'First name must be a string!'],
        required: [true, 'First name is required!'],
        minlength: [3, 'First name must be at least 3 characters long!'],
        maxlength: [10, 'First name must not exceed 10 characters!']
    },
    lastName: {
        type: [String, 'Last name must be a string!'],
        required: [true, 'Last name is required!'],
        minlength: [3, 'Last name must be at least 3 characters long!'],
        maxlength: [10, 'Last name must not exceed 10 characters!'],
    },
    age: {
        type: [Number, 'Age must be a number!'],
        required: [true, 'Age is required!'],
        min: [18, 'Age must be at least 18!'],
        max: [100, 'Age must not exceed 100!'],
    },
    email: {
        type: [String, 'Email must be a string!'],
        required: [true, 'Email is required!'],
        validate: [/^[a-z]+@[a-z]+\.[a-z]+$/, 'Invalid email!'],
    },
    username: {
        type: [String, 'Username must be a string!'],
        required: [true, 'Username is required!'],
        minlength: [3, 'Username must be at least 3 characters long!'],
        maxlength: [10, 'Username must not exceed 10 characters!'],

    },
    hashedPassword: {
        type: [String, 'Hashed password must be a string!'],
        required: [true, 'Hashed password is required!'],
    },
    offeredGames: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    orderedGames: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
});

module.exports = model('User', userSchema);