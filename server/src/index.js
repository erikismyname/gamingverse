const express = require('express');
const mongoose = require('mongoose');

const { DB_CONNECTION_STRING, PORT } = require('./config/constantsConfig.js');
const databaseConfig = require('./config/databaseConfig.js');
const expressConfig = require('./config/expressConfig.js');

startApp();

async function startApp() {

    const app = express();

    try {

        await databaseConfig(mongoose, DB_CONNECTION_STRING);

        console.log('Successfully connected to db!');

        expressConfig(express, app);

        app.listen(PORT, (err) => {

            if (err) throw new Error(err);

            console.log(`Server is up and running on port ${PORT}...`);

        });

    } catch (err) {

        console.log(err);

    }

}