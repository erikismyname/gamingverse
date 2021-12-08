const userController = require('../controllers/userController.js');
const gameController = require('../controllers/gameController.js');

module.exports = (app) => {

    app.use('/user', userController);

    app.use('/games', gameController);

};