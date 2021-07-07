import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Subcreddits.css';
import {SubCard} from '../../components/SubCard/SubCard';
import {fetchSubcreddits, selectSubcreddits} from '../../app/subCredditSlice';
import {setSelectedSubreddit, selectSelectedSubcreddit} from '../../app/credditSlice';


export const Subcreddits = () => {
    const dispatch = useDispatch();
    const subcreddits = useSelector(selectSubcreddits);
    const selectedSubcreddit = useSelector(selectSelectedSubcreddit);

    useEffect(() => {
        dispatch(fetchSubcreddits())
    }, [dispatch]);

    return (
            <SubCard className='subcreddit-card'>
                <ul className='subcreddits-list'>
                    {subcreddits.map((subcreddit) => (
                        <li className={`${
                            selectedSubcreddit === subcreddit.url && 'subcreddit-items'
                          }`}
                            key={subcreddits.id}>
                            <button
                                className='subcreddit-button'
                                type='button'
                                onClick={() => dispatch(setSelectedSubreddit(subcreddit.url))}
                            >
                                <img
                                    className='subcreddit-img'
                                    src={subcreddit.icon_img || `https://api.adorable.io/avatars/25/${subcreddit.display_name}`}
                                    alt={`${subcreddit.display_name}`}
                                    style={{ border: `3px solid ${subcreddit.primary_color}` }}
                                />
                                {subcreddit.display_name}
                            </button>
                        </li>
                    ))}
                </ul>
            </SubCard>
    )
}