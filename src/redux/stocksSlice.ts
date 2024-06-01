import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Определение интерфейса для акции
interface Stock {
    id: string;
    name: string;
    symbol: string;
    price: number;
    userId?: string;
    amount?: number;
}

// Определение интерфейса состояния акций
interface StocksState {
    stocks: Stock[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// Начальное состояние
const initialState: StocksState = {
    stocks: [],
    status: 'idle',
    error: null,
};

// Асинхронное действие для получения акций
export const fetchStocks = createAsyncThunk<Stock[]>('stocks/fetchStocks', async () => {
    const response = await axios.get('/api/stocks');
    return response.data;
});

export const buyStockAsync = createAsyncThunk<Stock, { symbol: string; userId: string; amount: number }>(
    'stocks/buyStockAsync',
    async ({ symbol, userId, amount }) => {
        const response = await axios.post('/api/buy', { symbol, userId, amount });
        return response.data;
    }
);

export const sellStockAsync = createAsyncThunk<Stock, { symbol: string; userId: string; amount: number }>(
    'stocks/sellStockAsync',
    async ({ symbol, userId, amount }) => {
        const response = await axios.post('/api/sell', { symbol, userId, amount });
        return response.data;
    }
);

// Создание среза (slice)
const stocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStocks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStocks.fulfilled, (state, action: PayloadAction<Stock[]>) => {
                state.status = 'succeeded';
                state.stocks = action.payload;
            })
            .addCase(fetchStocks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            })
            .addCase(buyStockAsync.fulfilled, (state, action: PayloadAction<Stock>) => {
                state.stocks.push(action.payload);
            })
            .addCase(sellStockAsync.fulfilled, (state, action: PayloadAction<Stock>) => {
                state.stocks = state.stocks.filter(stock => stock.id !== action.payload.id);
            });
    },
});

// Экспорт редьюсера и асинхронных действий
export default stocksSlice.reducer;

