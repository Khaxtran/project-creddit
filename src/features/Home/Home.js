import React, {useEffect} from 'react';
import './Home.css';
import {useSelector, useDispatch} from 'react-redux';
import { AnimatedList } from 'react-animated-list';
import {Post} from '../Post/Post';
import {PostLoading} from '../Post/PostsLoading';
import {getRandomNumber} from '../../util/getRandomNumber';
import {
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm,
    fetchComments,
  } from '../../app/credditSlice';

export const Home = () => {
    const creddit = useSelector(state => state.creddit);
    const {isLoading, error, searchTerm, selectedSubcreddit} = creddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubcreddit));
    }, [selectedSubcreddit]);

    const onToggleComment = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    }

    if(isLoading) {
        return (
            <AnimatedList animation="zoom">
                {Array(getRandomNumber(3, 10)).fill(<PostLoading />)}
            </AnimatedList>
        );
    }

    if(error) {
        return (
            <div>
                <h2>Failed to load posts.</h2>
                <button
                    type='button'
                    onClick={() => dispatch(fetchPosts(selectedSubcreddit))}
                >Try again</button>
            </div>
        )
    }

    if(posts.length === 0) {
        return (
            <div>
                <h2>No posts matching "{searchTerm}"</h2>
                <button
                    type='button'
                    onClick={() => {dispatch(setSearchTerm(''))}}
                >Back to home</button>
            </div>
        )
    }

    return (
        <>
         {posts.map((post, index) => (
             <Post 
                key={post.id}
                post={post}
                onToggleComment={onToggleComment(index)}
             />
         ))}   
        </>
    )
}