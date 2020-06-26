import api from './api.js';

export const fetchMeals = () => api.get('/meals');