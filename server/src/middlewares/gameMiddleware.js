const gameService = require('../services/gameService.js');

module.exports = () => (req, res, next) => {

    req.games = { ...gameService };

    next();

};