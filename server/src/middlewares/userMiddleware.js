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

    return {

        _id: newUser._id,

        username: newUser.username,

        token: generateToken(newUser),

    };

};

const loginUser = async ({ username, password }) => {

    const existingUser = await userService.getUserByUsername(username);

    if (!existingUser) throw new Error('Invalid username or password!');

    const passwordsMatch = await bcrypt.compare(password, existingUser.hashedPassword);

    if (!passwordsMatch) throw new Error('Invalid username or passwrod!');

    return {

        _id: existingUser._id,

        username: existingUser.username,

        token: generateToken(existingUser),

    };

};

const generateToken = (userData) => jwt.sign({ _id: userData._id, username: userData.username }, JWT_SECRET);

module.exports = () => (req, res, next) => {

    const token = req.headers['X-Authorization'];

    try {

        if (token) {

            const userData = jwt.verify(token, JWT_SECRET);

            req.user = userData;

        }

        req.userActions = { registerUser, loginUser };

        next();

    } catch (err) {

        console.log(err.message);

        res
            .status(401)
            .json({ message: 'Invalid token! Please sign in!' });

    }

};