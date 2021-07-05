import {createSlice} from '@reduxjs/toolkit';
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

// This is a Redux Thunk that gets subreddits.
export const fetchSubcreddits = () => async (dispatch) => {
    try{
        dispatch(startGetSubcreddits());
        const subcreddits = await getSubreddits();
        dispatch(getSubcredditsSuccess(subcreddits));
    } catch (error) {
        dispatch(getSubredditsFailed());
    }
};

export const selectSubcreddits = state => state.subcreddits.subcreddits;