const express = require('express');

const { DB_CONNECTION_STRING, SERVER_PORT } = require('./config/constantsConfig.js');
const databaseConfig = require('./config/databaseConfig.js');
const expressConfig = require('./config/expressConfig.js');
const routesConfig = require('./config/routesConfig.js');

const startApp = async () => {

    const app = express();

    try {

        await databaseConfig(DB_CONNECTION_STRING);

        expressConfig(app);

        routesConfig(app);

        app.listen(SERVER_PORT, (err) => {

            if (err) throw new Error(err);

            console.log(`Server is up and listening on port ${SERVER_PORT}...`);

        });

    } catch (err) {

        console.log(
            err.name == 'MongoParseError'
                ? `A db error occurred: ${err.message}`
                : `A server error occurred: ${err.message}`
        );

    }

}

startApp();