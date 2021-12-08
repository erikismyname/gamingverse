const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { PASSWORD_HASHING_SALT_ROUNDS, JWT_SECRET } = require('../config/constantsConfig.js');
const userService = require('../services/userService.js');

const registerUser = async ({ email, username, password }) => {

    const existingEmail = await userService.getUserByEmail(email);

    if (existingEmail) throw new Error('A user with such email already exists!');

    const existingUsername = await userService.getUserByUsername(username);

    if (existingUsername) throw new Error('A user with such username already exists!');

    const hashedPassword = await bcrypt.hash(password, PASSWORD_HASHING_SALT_ROUNDS);

    const newUser = await userService.registerUser({ email, username, hashedPassword });

    return generateToken(newUser);

};

const loginUser = async ({ username, password }) => {

    const existingUser = await userService.getUserByUsername(username);

    if (!existingUser) throw new Error('Invalid username or password!');

    const passwordsMatch = await bcrypt.compare(password, existingUser.hashedPassword);

    if (!passwordsMatch) throw new Error('Invalid username or passwrod!');

    return generateToken(existingUser);

};

const generateToken = (userData) => jwt.sign({ _id: userData._id, username: userData.username }, JWT_SECRET);

module.exports = () => (req, res, next) => {

    req.userActions = { registerUser, loginUser };

    const token = req.headers['Authorization-Token'];

    if (token) {

        try {

            const userData = jwt.verify(token, JWT_SECRET);

            req.userData = userData;

        } catch (err) {

            console.log(err.message);

        }
            
    }

    next();

};