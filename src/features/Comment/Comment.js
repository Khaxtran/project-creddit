import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './Comment.css';
import {Avatar} from '../Avatar/Avatar';

export const Comment = (props) => {
    const {comment} = props;
    return (
        <div className='comment'>
            <div className='comment-data'>
                <Avatar name={comment.author} />
                <p>{comment.author}</p>
                <p>{moment.unix(comment.created_utc).fromNow()}</p>
                <p>{comment.body}</p>
            </div>
            <ReactMarkdown source={comment.body} />
        </div>
    )
}