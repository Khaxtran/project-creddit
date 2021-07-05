import {createSlice, createSelector} from '@reduxjs/toolkit';
import {getSubreddits} from '../api/reddit';

const initialState = {
    subcreddits: [],
    error: false,
    isLoading: false,
};

const subCredditSlice = createSlice({
    name: 'subcreddits',
    initialState,
    reducers: {
        startGetSubcreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubcredditsSuccess(state, action) {
            state.isLoading = false;
            state.subcreddits = action.payload;
        },
        getSubredditsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
    },
});

export const {
    startGetSubcreddits,
    getSubcredditsSuccess,
    getSubredditsFailed,
} = subCredditSlice.actions;

export default subCredditSlice.reducer;