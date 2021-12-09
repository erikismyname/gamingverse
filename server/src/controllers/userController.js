const router = require('express').Router();
const { body, validationResult } = require('express-validator');

router.post(

    '/register',

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required!')
        .bail()
        .isEmail()
        .withMessage('Email must be a valid one!'),

    body('username')
        .trim()
        .notEmpty()
        .withMessage('Username is required!')
        .bail()
        .isAlpha()
        .withMessage('Username must contain only latin characters!')
        .bail()
        .isLength({ min: 3, max: 5 })
        .withMessage('Username must be between 3 and 5 characters long!'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required!')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Password must be at least 3 characters long!'),

    async (req, res) => {

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                const error = new Error('Invalid register data!');

                error.type = 'Validation';

                throw error;

            }

            const userData = {
                email: req.body.email.toLowerCase(),
                username: req.body.username.toLowerCase(),
                password: req.body.password.toLowerCase(),
            };

            const newUser = await req.userActions.registerUser(userData);

            res
                .status(201)
                .json(newUser);

        } catch (err) {

            let error;

            let statusCode;

            if (err.type == 'Validation') {

                error = errors;

                statusCode = 400;

            } else {

                error = err.message;

                statusCode = 409;

            }

            res
                .status(statusCode)
                .json({ message: error });

        }

    }

);

router.post('/login', async (req, res) => {

    try {

        const userData = {
            username: req.body.username.toLowerCase(),
            password: req.body.password.toLowerCase(),
        };

        const user = await req.userActions.loginUser(userData);

        res.json(user);

    } catch (err) {

        res
            .status(400)
            .json({ message: err.message });

    }

});

router.get('/logout', (req, res) => {

    res
        .status(204)
        .end();

});

module.exports = router;