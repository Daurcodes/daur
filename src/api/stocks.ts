import axios from 'axios';

const API_URL = 'http://localhost:5000/api/stocks';

export const getStocks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка получения акций');
    }
};

export const addStock = async (name: string, symbol: string, price: number, userId: string) => {
    try {
        const response = await axios.post(API_URL, { name, symbol, price, userId });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка добавления акции');
    }
};

export const buyStock = async (symbol: string, userId: string, amount: number) => {
    try {
        const response = await axios.post(`${API_URL}/buy`, { symbol, userId, amount });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка покупки акции');
    }
};

export const sellStock = async (symbol: string, userId: string, amount: number) => {
    try {
        const response = await axios.post(`${API_URL}/sell`, { symbol, userId, amount });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка продажи акции');
    }
};
