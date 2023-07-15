import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
    counter: 0,
};

// Define your async action using createAsyncThunk
export const fetchCounter = createAsyncThunk('counter/fetch', async () => {
    // Simulate an API call
    const response = await fetch('/api/counter');
    const data = await response.json();
    return data.counter;
});

// Define your slice using createSlice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCounter.fulfilled, (state, action) => {
            state.counter = action.payload;
        });
    },
});

// Export your actions and reducer
export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

// Create the Redux store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
