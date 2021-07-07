import React from 'react';
import './SubCard.css';

export const SubCard = (props) => {
    return (
        <div>
            <h2>Subcreddits</h2>
            <div className={` ${props.className}`}>{props.children}</div>
        </div>
    )
}
