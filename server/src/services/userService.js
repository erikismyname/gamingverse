const User = require('../models/User.js');

const getUserByEmail = async (email) => {

    const emailPattern = new RegExp(`^${email}$`);

    return User.findOne({ email: emailPattern });

};

const getUserByUsername = async (username) => {

    const usernamePattern = new RegExp(`^${username}$`);

    return User.findOne({ username: usernamePattern });

}

const registerUser = (userData) => User.create(userData);

module.exports = { getUserByEmail, getUserByUsername, registerUser };