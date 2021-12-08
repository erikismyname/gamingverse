const userController = require('../controllers/userController.js');

module.exports = (app) => {

    app.use('/user', userController);
    
};