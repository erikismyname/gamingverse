module.exports = () => async (req, res, next) => {

    try {

        const game = await req.games.getOneById(req.params.gameId);

        req.game = game;

        next();

    } catch (err) {

        console.log(err.message);

    }

};