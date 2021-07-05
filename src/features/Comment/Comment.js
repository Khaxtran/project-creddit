import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './Comment.css';
import {Avatar} from '../Avatar/Avatar';

export const Comment = (props) => {
    const {comment} = props;
    return (
        <div>
            <div>
                <Avatar name={comment.author} />
                <p>{comment.author}</p>
                <p>{moment.unix(comment.created_utc).fromNow()}</p>
            </div>
            <ReactMarkdown source={comment.body} />
        </div>
    )
}