import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the state of isOpen between true and false
    };

    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" />
                </div>

                {/* Burger icon for small screens */}
                <div className="burger-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle between bars and times icons */}
                </div>

                {/* Nav links */}
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                            onClick={toggleMenu} // Close menu when a link is clicked
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                            onClick={toggleMenu}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                            onClick={toggleMenu}
                        >
                            Best Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/director"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                            onClick={toggleMenu}
                        >
                            Director's Desk
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/career"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                            onClick={toggleMenu}
                        >
                            Career
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                            onClick={toggleMenu}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
