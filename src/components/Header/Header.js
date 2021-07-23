import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h2>City Move</h2>
            </div>
            <nav>
                <a href="/home">Home</a>
                <a href="/destination">Destination</a>
                <a href="/blog">Blog</a>
                <a id='login-button' href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;