import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import stocksReducer from './stocksSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        stocks: stocksReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
