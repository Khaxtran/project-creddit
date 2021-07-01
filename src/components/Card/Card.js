import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div>
      <h2>Heading</h2>
      <div className={`card ${props.className}`}>{props.children}</div>
    </div>
  );
  
};

export default Card;
