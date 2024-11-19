import React, { createContext, useState, useEffect } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

// ThemeContext Provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme is 'light'

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Apply the current theme class to the body
    useEffect(() => {
        document.body.className = theme; // Dynamically update the body class
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
