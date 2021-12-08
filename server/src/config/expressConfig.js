const express = require('express');

const corsMiddleware = require('../middlewares/corsMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

module.exports = (app) => {

    app.use(corsMiddleware());

    app.use(authMiddleware());

    app.use(express.json());

};