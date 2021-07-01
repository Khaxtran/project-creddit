import React from 'react';
import './Subcreddits.css';
import {SubCard} from '../../components/SubCard/SubCard';

export const Subcreddits = () => {
    return (
            <SubCard className='subcreddit-card'>
                <ul className='subcreddit-list'>
                    <li>subname</li>
                    <li>subname</li>
                    <li>subname</li>
                </ul>
            </SubCard>
    )
}