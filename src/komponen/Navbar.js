import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h2 className="logo">febraka</h2>
            <div className="dekstopMenu">
                <Link to="/" className="dekstopMenuListItem">Home</Link>
                <Link to="/about" className="dekstopMenuListItem">About</Link>
                <Link to="/contact" className="dekstopMenuListItem">Contact</Link>
            </div>
            <button className="dekstopMenuBtn"></button>
        </nav>
    );
} 

export default Navbar;
