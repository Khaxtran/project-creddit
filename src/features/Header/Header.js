import React from 'react';
import { FaRedditSquare, FaSearch } from 'react-icons/fa';
import './Header.css';


export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <FaRedditSquare className='logo-icon'/>
                <p className='purple-c'>C</p>
                <p>reddit</p>
            </div>
            <div className='search-section' >
                <form>
                    <input className='search-bar' type='text' placeholder='Search'/>
                    <button type='submit' aria-label='Search'>
                        <FaSearch />
                    </button>
                </form>
            </div>
            
        </header>
    )
}