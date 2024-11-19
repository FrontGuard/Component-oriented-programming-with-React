import React from 'react';

const Settings = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Settings</h1>
            <p style={styles.text}>Here you can manage your preferences and configurations.</p>
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

export default Settings;
