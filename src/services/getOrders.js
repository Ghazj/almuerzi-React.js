import api from './api.js';

export const getOrders = () => api.get('/orders');