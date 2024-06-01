import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Ошибка входа');
        } else {
            throw new Error('Ошибка входа');
        }
    }
};

export const register = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { firstName, lastName, email, password });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Ошибка регистрации');
        } else {
            throw new Error('Ошибка регистрации');
        }
    }
};
