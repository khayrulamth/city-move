import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='header'>
            <div className="logo">
                <Link to="/home"><h2>City Move</h2></Link>
            </div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blog">Blog</Link>
                {
                    loggedInUser.email ? <Link id='login-button' to="/profile">Profile</Link> : <Link id='login-button' to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;
