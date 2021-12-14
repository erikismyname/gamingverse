import API_ENDPOINTS from '../config/constants.js';
import { getRequest, postRequest } from '../api/api.js';

const registerUser = async (userData) => postRequest(`${API_ENDPOINTS.user}/register`, userData);

const loginUser = async (userData) => postRequest(`${API_ENDPOINTS.user}/login`, userData);

const logoutUser = async () => getRequest(`${API_ENDPOINTS.user}/logout`);

const getOwnGames = async (userId) => getRequest(`${API_ENDPOINTS.user}/${userId}/games`);

export { registerUser, loginUser, logoutUser, getOwnGames };