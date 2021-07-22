import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h2>City Move</h2>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/">Destination</a>
                <a href="/">Blog</a>
                <a href="/">Login</a>
            </nav>
        </div>
    );
};

export default Header;