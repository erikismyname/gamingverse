import API_ENDPOINTS from '../config/constants.js';
import * as api from '../api/api.js';

const getAllGames = async () => api.getRequest(API_ENDPOINTS.games);

const getGameById = async (gameId) => api.getRequest(`${API_ENDPOINTS.games}/${gameId}`);

const createGame = async (gameData) => api.postRequest(API_ENDPOINTS.games, gameData);

const updateGame = async (gameId, gameData) => api.putRequest(`${API_ENDPOINTS.games}/${gameId}`, gameData);

const deleteGame = async (gameId) => api.deleteRequest(`${API_ENDPOINTS.games}/${gameId}`);

export { getAllGames, getGameById, createGame, updateGame, deleteGame };