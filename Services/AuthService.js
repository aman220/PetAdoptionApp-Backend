import axios from 'axios';
import { API_BASE_URL, JWT_TOKEN_KEY } from '../constants';
import jwt_decode from 'jwt-decode';

const AuthService = {
    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
            localStorage.setItem(JWT_TOKEN_KEY, response.data.jwtToken);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    logout: () => {
        localStorage.removeItem(JWT_TOKEN_KEY);
    },
    getCurrentUser: () => {
        const jwtToken = localStorage.getItem(JWT_TOKEN_KEY);
        if (jwtToken) {
            const decodedToken = jwt_decode(jwtToken);
            return {
                id: decodedToken.id,
                userName: decodedToken.userName,
                email: decodedToken.email
                // Add more user information if available in the token
            };
        }
        return null;
    }
};

export default AuthService;
