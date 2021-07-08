import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './Post.css';
import './PostsLoading.css';
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
  } from 'react-icons/ti';
import {RiMessage3Line} from 'react-icons/ri';
import {getRandomNumber} from '../../util/getRandomNumber';

export const PostLoading = () => {
    return (
        <article>
            <h2><Skeleton width={getRandomNumber(100, 200)}  /></h2>
            
            <div>
                <div className='loading-img-container'>
                    <Skeleton height={250} width={950}/>
                </div>

                <div className='interaction-bar interaction-bar-loading'>
                    <div className='button-container'>
                        <div className='left'>
                            <button><TiArrowUpOutline /></button>
                                <Skeleton className="post-votes-value-loading" />
                            <button><TiArrowDownOutline /></button>
                        </div>

                        <div className='center'>
                            <Skeleton width='15ch' height='2ch'/>
                            <Skeleton width='10ch' height='2ch'/>
                        </div>

                        <span className='right'>
                            <Skeleton className="post-votes-value-loading"/>
                            <button><RiMessage3Line /></button>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}