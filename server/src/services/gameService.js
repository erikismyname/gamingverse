const Game = require('../models/Game.js');

const getAll = async () => Game.find({});

const getOne = async (gameId) => Game.findById(gameId);

const create = async (gameData) => Game.create(gameData);

const update = async (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

const remove = async (gameId) => Game.findByIdAndDelete(gameId);

module.exports = { getAll, getOne, create, update, remove };