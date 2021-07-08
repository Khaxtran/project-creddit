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
                <div className='user-info'>
                    <Avatar name={comment.author}  />
                    <p className='username'>{comment.author}</p>
                </div>
                <p className='comment-body'>{comment.body}</p>
                <p className='comment-time'>{moment.unix(comment.created_utc).fromNow()}</p>
            </div>
            <ReactMarkdown source={comment.body} />
        </div>
    )
}