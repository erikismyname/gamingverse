const Game = require('../models/Game.js');

const getAll = async () => Game.find({});

const getOneById = async (gameId) => Game.findById(gameId);

const getOneByTitle = async (gameTitle) => Game.findOne({ title: { $regex: `^${gameTitle}$` } });

const getOwn = async (userId) => Game.find({ owner: userId });

const create = async (gameData) => Game.create(gameData);

const update = async (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

const remove = async (gameId) => Game.findByIdAndDelete(gameId);

const like = async (gameId, userId) => {

    const game = await Game.findById(gameId);

    game.likes.push(userId);

    await game.save();

};

const dislike = async (gameId, userId) => {

    const game = await Game.findById(gameId);

    game.likes.splice(game.likes.indexOf(userId), 1);

    await game.save();

};

module.exports = { getAll, getOneById, getOneByTitle, getOwn, create, update, remove, like, dislike };