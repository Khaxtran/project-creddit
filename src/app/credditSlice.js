import {createSlice, createSelector} from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../api/reddit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubcreddit: '/r/dog'
}

const credditSlice = createSlice({
    name: 'credditPosts',
    initialState,
    reducers: {
        setPost(state, action) {
            state.posts = action.payload;
        },
        startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
           
        },
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubcreddit = action.payload;
            state.searchTerm = '';
        },
        toggleShowingComment(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
        },
        startGetComments(state, action) {
            // If we're hiding comments, don't fetch comments
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
            if(!state.posts[action.payload].showingComments) {
                return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        },
    },
});

export const {
    setPosts,
    getPostsFailed,
    getPostsSuccess,
    startGetPosts,
    setSearchTerm,
    setSelectedSubreddit,
    toggleShowingComments,
    getCommentsFailed,
    getCommentsSuccess,
    startGetComments,
  } = credditSlice.actions;

export default credditSlice.reducer;

//This is a Redux Thunk that gets posts from a subreddit
export const fetchPosts = (subreddit) => async (dispatch) => {
    try{
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);

        // We are adding showingComments and comments as additional fields to handle showing 
        //them when the user wants to. We need to do this because we need to call 
        //another API endpoint to get the comments for each post.

        const postsWithMetadata = posts.map(post => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            error: false,
        }))
       
        dispatch(getPostsSuccess(postsWithMetadata));
    } catch (error) {
        dispatch(getPostsFailed());
    }
};

export const fetchComments = (index, permalink) => async (dispatch) => {
    try{
        dispatch(startGetComments(index));
        const comments = await getPostComments(permalink);
        dispatch(getCommentsSuccess({index, comments}));
    } catch (error) {
        dispatch(getPostsFailed(index));
    }
};

export const selectPosts = state => state.creddit.posts;
const selectSearchTerm = state => state.creddit.searchTerm;

export const selectSelectedSubcreddit = state => state.creddit.selectedSubcreddit;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        console.log(searchTerm)
        if(searchTerm !== '') {
            return posts.filter(post => 
                post.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        return posts;
    }
);