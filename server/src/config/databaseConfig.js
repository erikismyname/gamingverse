const mongoose = require('mongoose');

module.exports = async (dbConnStr) => {

    await mongoose.connect(dbConnStr);

    console.log('Successfully connected to db!');

};