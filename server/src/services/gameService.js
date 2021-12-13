const Game = require('../models/Game.js');

const getAll = async () => Game.find({});

const getOneById = async (gameId) => Game.findById(gameId);

const getOneByTitle = async (gameTitle) => Game.findOne({ title: { $regex: `^${gameTitle}$` } });

const getOwn = async (userId) => Games.find({ owner: userId });

const create = async (gameData) => Game.create(gameData);

const update = async (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

const remove = async (gameId) => Game.findByIdAndDelete(gameId);

module.exports = { getAll, getOneById, getOneByTitle, getOwn, create, update, remove };