import React from 'react';
import './Subcreddits.css';
import Card from '../../components/Card/Card';

export const Subcreddits = () => {
    return (
        <section>
            <h2>Subcreddits</h2>
            <Card className='subcreddit-card'>
                <ul className='subcreddit-list'>
                    <li>subname</li>
                    <li>subname</li>
                    <li>subname</li>
                </ul>
            </Card>
        </section>
        
    )
}