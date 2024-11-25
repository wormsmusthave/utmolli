import React from 'react';

const DummyScreen = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Dummy Screen</h1>
            <p style={styles.paragraph}>This is a dummy screen used for testing.</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0'
    },
    header: {
        fontSize: '2rem',
        color: '#333'
    },
    paragraph: {
        fontSize: '1rem',
        color: '#666'
    }
};

export default DummyScreen;
