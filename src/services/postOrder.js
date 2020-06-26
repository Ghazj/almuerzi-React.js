import api from './api.js';

export const postOrder = (data) => api.post('/orders', data)