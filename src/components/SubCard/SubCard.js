import React from 'react';
import '../Card/Card.css';

export const SubCard = (props) => {
    return (
        <div>
            <h2>Subcreddits</h2>
            <div className={`card ${props.className}`}>{props.children}</div>
        </div>
    )
}
