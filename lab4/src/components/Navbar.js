import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <nav className={`navbar ${theme}`}>
            <div className="nav-items">
                <Link to="/" className={`nav-button ${theme}`}>Home</Link>
                <Link to="/about" className={`nav-button ${theme}`}>About</Link>
                <Link to="/settings" className={`nav-button ${theme}`}>Settings</Link>
            </div>
            <ThemeSwitcher />
        </nav>
    );
};

export default Navbar;
