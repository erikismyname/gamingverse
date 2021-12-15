const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isUser, isOwner } = require('../middlewares/guardsMiddleware.js');
const preloadGame = require('../middlewares/preloadGameMiddleware.js');

router.get('/', async (req, res) => {

    try {

        const games = await req.games.getAll();

        res.json(games);

    } catch (err) {

        console.log(err.message);

        res
            .status(400)
            .json({ message: err.message });

    }

});

router.get('/:gameId', async (req, res) => {

    try {

        const game = await req.games.getOneById(req.params.gameId);

        res.json(game);

    } catch (err) {

        console.log(err.message);

        res
            .status(400)
            .json({ message: err.message });

    }

});

router.post(

    '/',

    isUser(),

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required!')
        .bail()
        .isLength({ min: 3, max: 15 })
        .withMessage('Title must be between 3 and 15 characters long!')
        .bail()
        .escape(),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 10, max: 400 })
        .withMessage('Description must be between 10 and 400 characters long!')
        .bail()
        .escape(),

    body('image-url')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!')
        .bail()
        .isURL({ require_protocol: true })
        .withMessage('Image URL must be a valid one!'),

    async (req, res) => {

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                const error = new Error('Invalid create data!');

                error.type = 'Validation';

                throw error;

            }

            const gameTitle = req.body.title;

            const existingGame = await req.games.getOneByTitle(gameTitle);

            if (existingGame) throw new Error('A game with such title already exists!');

            const gameData = {
                title: gameTitle,
                description: req.body.description,
                imageURL: req.body['image-url'],
                owner: req.user._id,
            };

            const newGame = await req.games.create(gameData);

            res
                .status(201)
                .json(newGame);

        } catch (err) {

            console.log(err.message);

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

router.put(

    '/:gameId',

    isUser(),

    preloadGame(),

    isOwner(),

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required!')
        .bail()
        .isLength({ min: 3, max: 15 })
        .withMessage('Title must be between 3 and 15 characters long!')
        .bail()
        .escape(),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 10, max: 400 })
        .withMessage('Description must be between 10 and 400 characters long!')
        .bail()
        .escape(),

    body('image-url')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!')
        .bail()
        .isURL({ require_protocol: true })
        .withMessage('Image URL must be a valid one!'),

    async (req, res) => {

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                const error = new Error('Invalid create data!');

                error.type = 'Validation';

                throw error;

            }

            const gameData = {
                title: req.body.title,
                description: req.body.description,
                imageURL: req.body['image-url'],
            };

            const gameId = req.params.gameId;

            await req.games.update(gameId, gameData);

            const updatedGame = await req.games.getOneById(gameId);

            res.json(updatedGame);

        } catch (err) {

            console.log(err.message);

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

router.delete('/:gameId', isUser(), preloadGame(), isOwner(), async (req, res) => {

    try {

        await req.games.remove(req.params.gameId);

        res
            .status(204)
            .end();

    } catch (err) {

        res
            .status(400)
            .json({ message: err.message });

    }

});

module.exports = router;