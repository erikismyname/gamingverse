const router = require('express').Router();
const { body, validationResult } = require('express-validator');

router.get('/', async (req, res) => {

    try {

        const games = await req.games.getAll();

        res.json(games);

    } catch (err) {

        res
            .status(400)
            .json({ message: err.message });

    }

});

router.get('/:gameId', async (req, res) => {

    try {

        const game = await req.games.getOne(req.params.gameId);

        res.json(game);

    } catch (err) {

        res
            .status(400)
            .json({ message: err.message });

    }

});

router.post(

    '/',

    body('title')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Title is required!')
        .bail()
        .isLength({ min: 3, max: 15 })
        .withMessage('Title must be between 3 and 15 characters long!'),

    body('description')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 10, max: 300 })
        .withMessage('Description must be between 10 and 300 characters long!'),

    body('imageURL')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!')
        .bail()
        .isURL({ require_protocol: true })
        .withMessage('Image URL must be a valid one!'),

    body('count')
        .isInt({ min: 1, max: 10 })
        .withMessage('Count must be between 1 and 10!'),

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
                imageURL: req.body.imageURL,
                count: Number(req.body.count),
                // owner: req.user._id,
            };

            const newGame = await req.games.create(gameData);

            res
                .status(201)
                .json(newGame);

        } catch (err) {

            const error = err.type == 'Validation' ? errors : err.message;

            res
                .status(400)
                .json({ message: error });

        }

    }

);

router.put(

    '/:gameId',

    body('title')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Title is required!')
        .bail()
        .isLength({ min: 3, max: 15 })
        .withMessage('Title must be between 3 and 15 characters long!'),

    body('description')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 10, max: 300 })
        .withMessage('Description must be between 10 and 300 characters long!'),

    body('imageURL')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!')
        .bail()
        .isURL({ require_protocol: true })
        .withMessage('Image URL must be a valid one!'),

    body('count')
        .isInt({ min: 1, max: 10 })
        .withMessage('Count must be between 1 and 10!'),

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
                imageURL: req.body.imageURL,
                count: Number(req.body.count),
            };

            const gameId = req.params.gameId;

            await req.games.update(gameId, gameData);

            const updatedGame = await req.games.getOne(gameId);

            console.log(updatedGame);

        } catch (err) {

            const error = err.type == 'Validation' ? errors : err.message;

            res
                .status(400)
                .json({ message: error });

        }

    }

);

router.delete('/:gameId', async (req, res) => {

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