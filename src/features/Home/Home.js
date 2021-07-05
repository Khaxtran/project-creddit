import React from 'react';
import './Home.css';
import {Post} from '../Post/Post';
import {PostLoading} from '../Post/PostsLoading';

export const Home = () => {
    return (
        <>
            <Post />
            <PostLoading />
        </>
    )
}