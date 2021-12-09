const express = require('express');

const corsMiddleware = require('../middlewares/corsMiddleware.js');
const userMiddleware = require('../middlewares/userMiddleware.js');
const gameMiddleware = require('../middlewares/gameMiddleware.js');

module.exports = (app) => {

    app.use(corsMiddleware());

    app.use(userMiddleware());

    app.use(gameMiddleware());

    app.use(express.json());

};