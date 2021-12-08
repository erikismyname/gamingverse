const gameService = require('../services/gameService.js');

module.exports = () => (req, res, next) => {

    req.gameActions = { ...gameService };

    next();

};