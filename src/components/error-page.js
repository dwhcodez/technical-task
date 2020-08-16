// Import React core components
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

// Stateless component
const ErrorPage = () => {

    return(

        <section id="error-page">
            <h1 id="error-title">Oh no!</h1>
            <p id="error-message">We can't find what you're looking for right now, click below to head to the homepage while we try and fix it :(</p>
            <BrowserRouter>
                <Link to="/" id="error-button">Home</Link>
            </BrowserRouter>
        </section>

    );

};

export default ErrorPage;