const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    name: {
        type: [String, 'Name must be a string!'],
        required: [true, 'Name is required!'],
        minlength: [3, 'Name must be at least 3 characters long!'],
        maxlength: [20, 'Name must not exceed 20 characters!'],
    },
    imageUrl: {
        type: [String, 'URL must be a string!'],
        required: [true, 'URL is required!'],
        validate: [/^https?:\/\//, 'Invalid URL!'],
    },
    genre: [{
        type: [String, 'Genre must be a string!'],
        required: [true, 'Genre is required!'],
        minlength: [3, 'Genre must be at least 3 characters long!'],
        maxlength: [20, 'Genre must not exceed 20 characters!'],
    }],
    platform: [{
        type: [String, 'Platform must be a string'],
        required: [true, 'Platform is required!'],
        enum: {
            values: ['PC', 'PS'],
            message: 'Platform must be either PC or PS!'
        }
    }],
    description: {
        type: [String, 'Description must be a string!'],
        required: [true, 'Description is required!'],
        minlength: [10, 'Description must be at least 10 characters long!'],
        maxlength: [100, 'Description must not exceed 100!'],
    },
    year: {
        type: [Number, 'Year must be a number'],
        required: [true, 'Year is required!'],
        min: [2000, 'Year must be at least 2000!'],
        max: [2021, 'Year must not exceed 2021!'],
    },
    price: {
        type: [Number, 'Price must be a string!'],
        required: [true, 'Price is required!'],
        min: [1, 'Price must be at least 1!'],
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    orderedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Game', gameSchema);