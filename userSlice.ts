import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userId: string | null;
    token: string | null;
}

const initialState: UserState = {
    userId: localStorage.getItem('userId'),
    token: localStorage.getItem('token'),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ userId: string; token: string }>) {
            state.userId = action.payload.userId;
            state.token = action.payload.token;
            localStorage.setItem('userId', action.payload.userId);
            localStorage.setItem('token', action.payload.token);
        },
        clearUser(state) {
            state.userId = null;
            state.token = null;
            localStorage.removeItem('userId');
            localStorage.removeItem('token');
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
