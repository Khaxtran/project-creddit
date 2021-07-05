import React from 'react';
import './Post.css';
import {Comment} from '../Comment/Comment';
import Skeleton from 'react-loading-skeleton';
import Card from '../../components/Card/Card';
import {TiArrowDownOutline, TiArrowUpOutline} from 'react-icons/ti';
import {RiMessage3Line} from 'react-icons/ri';
 
export const Post = (props) => {
  const {post, onToggleComments} = props;
  

  const renderComments = () => {
    if(post.errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    };

    if(post.loadingComments) {
      return (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      );
    };

    if(post.showingComments) {
      return (
        <div>
          {post.map((comment) => (
            <Comment comment={comment} key={comment.id}/>
          ))}
        </div>
      );
    };

    return null;
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
                type='button'
                onClick={() => onToggleComments(post.permalink)}
                aria-label="Show comments"
               ><RiMessage3Line /></button>
            </div>

            {renderComments()};
          </div>
        </div>
        </Card>
    )
}