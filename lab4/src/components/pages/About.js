import React from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About This App</h1>
            <p style={styles.text}>
                This application demonstrates routing and dynamic theme switching in React. Use the navigation bar to explore other pages.
            </p>
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

export default About;
