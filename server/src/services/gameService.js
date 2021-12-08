const Game = require('../models/Game.js');

const getAllGames = async () => Game.find({});

const getSingleGame = async (gameId) => Game.findById(gameId);

const getUserGames = async (userId) => Game.find({ owner: userId })

const createGame = async (gameData) => Game.create(gameData);

const updateGame = async (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

const deleteGame = async (gameId) => Game.findByIdAndDelete(gameId);

module.exports = { getAllGames, getSingleGame, getUserGames, createGame, updateGame, deleteGame };