import React, {useState} from 'react';
import moment from 'moment'
import './Post.css';
import {Avatar} from '../Avatar/Avatar';
import {Comment} from '../Comment/Comment';
import Skeleton from 'react-loading-skeleton';
import Card from '../../components/Card/Card';
import {TiArrowDownOutline,
        TiArrowDownThick,
        TiArrowUpOutline,
        TiArrowUpThick} from 'react-icons/ti';
import {RiMessage3Line} from 'react-icons/ri';
 
export const Post = (props) => {
  const [voteValue, setVoteValue] = useState(0);
  const {post, onToggleComment} = props;

  const onHandleVote = (newValue) => {
    if(newValue === voteValue) {
      setVoteValue(0);
    }else if(newValue === 1) {
      setVoteValue(1);
    }else {
      setVoteValue(-1);
    }
  }

  const renderUpVote = () => {
    if(voteValue === 1) {
      return <TiArrowUpThick/>
    }
    return <TiArrowUpOutline/>
  }

  const renderDownVote = () => {
    if(voteValue === -1) {
      return <TiArrowDownThick/>
    }
    return <TiArrowDownOutline/>
  }

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
        <div className="loading-comments">
          <Skeleton height={20}/>
          <Skeleton height={20}/>
          <Skeleton height={20}/>
          <Skeleton height={20}/>
        </div>
      );
    };

    if(post.showingComments) {
      return (
        <div className='comment-section'>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id}/>
          ))}
        </div>
      );
    };

    return null;
  }
    return(
     
      <article key={post.id}>
        <h2>{post.title}</h2>
        <Card>

            
            <img src={post.url} alt="" className="post-image" />
            

            <div className='interaction-bar'>
                <div className='button-container'>
                  <div className='left'>
                    <button
                      type='button'
                      onClick={() => onHandleVote(1)}
                      aria-label="Up vote"
                    >{renderUpVote()}</button>
                    <p>14.5k</p>
                    <button
                      type='button'
                      onClick={() => onHandleVote(-1)}
                      aria-label="Down vote"
                    > 
                      {renderDownVote()}
                    </button>
                  </div>

                  <div className='center'>
                    <Avatar name={post.author} />
                    <span className="user">{post.author}</span>
                    <span className='time'>{moment.unix(post.created_utc).fromNow()}</span>
                  </div>

                  <div className='right'>
                    <button 
                      type='button'
                      onClick={() => onToggleComment(post.permalink)}
                      aria-label="Show comments"
                    ><RiMessage3Line/></button>
                    <p>{post.num_comments}</p>
                  </div>
                </div>  
              </div>
              <div>
                {renderComments()} 
              </div>
          
        </Card>
      </article>
        
    )
}