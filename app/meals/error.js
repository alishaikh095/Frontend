'use client';

import React from 'react';



const ErrorComponent = ({ error, reset }) => {
    return (
        <main className='error'>
            <h1>Something went wrong!</h1>
            <p>{error?.message || 'An unexpected error occurred.'}</p>
            <button onClick={reset} style={{ padding: '10px 20px', marginTop: '20px' }}>
                Try Again
            </button>
        </main>
    );
};

export default ErrorComponent;