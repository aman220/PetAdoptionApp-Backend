import axios from 'axios';
import { API_BASE_URL } from '../constants';

const ApiService = {
    getAllProducts: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/products`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    getProductById: async (productId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    addProductToCart: async (productId, quantity) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/cart/add`, { productId, quantity });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    // Add more API methods here
};

export default ApiService;
