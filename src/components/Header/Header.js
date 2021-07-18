import React from 'react';
import { Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3 className="logo">City Move</h3>
             <Nav className="justify-content-end" activeKey="/home">            
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/" eventKey="link-1">Destination</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blog" eventKey="link-2">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/login' eventKey="link-2">Login</Nav.Link>
            </Nav.Item>

        </Nav>
        </div>
        
        // <div className='header-link'>
        //     <Link to='/'>Home</Link>
        //     <Link to='/'>Destination</Link>
        //     <Link to='/blog'>Blog</Link>
        //     <Link to='/contact'>Contact</Link>
        //     <Link to='/login'>Login</Link>
        // </div>
    );
};

export default Header;