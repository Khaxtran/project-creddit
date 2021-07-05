import React from 'react';
import './Post.css';
import Skeleton from 'react-loading-skeleton';
import Card from '../../components/Card/Card';
import {TiArrowDownOutline, TiArrowUpOutline} from 'react-icons/ti';
import {RiMessage3Line} from 'react-icons/ri';
 
export const Post = () => {

    const renderComments = () => {
        return (
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          );
    }
    
    return(
        <Card>
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
               <button 
                
               ><RiMessage3Line /></button>
            </div>
          </div>
          {renderComments()}
        </div>
        </Card>
    )
}