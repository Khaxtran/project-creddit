import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { FaRedditSquare, FaSearch } from 'react-icons/fa';
import './Header.css';

import {setSearchTerm} from '../../app/credditSlice';


export const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector(state => state.creddit.searchTerm);
    const dispatch = useDispatch();

    const handleTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

    return (
        <header>
            <div className="logo-container">
                <FaRedditSquare className='logo-icon'/>
                <p className='purple-c'>C</p>
                <p className='reddit-logo'>reddit</p>
            </div>
            <div className='search-section' >
                <form onSubmit={onSearchSubmit}>
                    <input 
                        className='search-bar' 
                        type='text' 
                        placeholder='Search'
                        value={searchTermLocal}
                        onChange={handleTermChange}
                        aria-label='Search posts'/>
                    <button 
                        type='submit'
                        onClick={onSearchSubmit} 
                        aria-label='Search'
                        >
                        <FaSearch />
                    </button>
                </form>
            </div>
            
        </header>
    )
}