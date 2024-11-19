import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/about" element={<h1>About</h1>} />
                        <Route path="/settings" element={<h1>Settings</h1>} />
                    </Routes>
                    <ThemeSwitcher /> {/* Додатково можна додати тут */}
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
