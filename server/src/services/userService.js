const User = require('../models/User.js');

const getUserByEmail = async (email) => User.findOne({ email: { $regex: `^${email}$` } });

const getUserByUsername = async (username) => User.findOne({ username: { $regex: `^${username}$` } });

const registerUser = (userData) => User.create(userData);

module.exports = { getUserByEmail, getUserByUsername, registerUser };