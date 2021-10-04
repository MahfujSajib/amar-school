import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="m-3 navbar">
                <Link className='link' to="/home">Home</Link>
                <Link className='link' to="/about">About</Link>
                <Link className='link' to="/services">Services</Link>
                <Link className='link' to="/contact">Contact</Link>
            </Nav>

        </Navbar >
    );
};

export default Header;