import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className={`button ${theme}`}
        >
            {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </button>
    );
};

export default ThemeSwitcher;
