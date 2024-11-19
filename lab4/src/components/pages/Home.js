import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to the Home Page</h1>
            <p style={styles.text}>This is the starting point of our application. Explore the other pages using the navigation bar.</p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    heading: {
        fontSize: '2rem',
    },
    text: {
        fontSize: '1.2rem',
    },
};

export default Home;
