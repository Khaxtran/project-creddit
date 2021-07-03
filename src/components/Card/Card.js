import React from 'react';
import './Card.css';
import {TiArrowDownOutline, TiArrowUpOutline} from 'react-icons/ti';
import {BiCommentDots} from 'react-icons/bi';

const Card = (props) => {
  return (
    <div>
      <h2>Heading</h2>
      <div className={`card ${props.className}`}>
        {props.children}
        <div className='post-image'>This contains image</div>
        <div className='interaction-bar'>
          <div className='button-container'>
            <div className='left'>
              <button><TiArrowUpOutline /></button>
              <p>14.5k</p>
              <button><TiArrowDownOutline /></button>
            </div>
            <div className='center'>
              <p className='user'>Username</p>
              <p className='time'>8hrs ago</p>
            </div>
            <div className='right'>
               <button><BiCommentDots /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Card;
