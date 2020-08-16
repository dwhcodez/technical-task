// Import React core components
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

// Stateless component
const Breadcrumb = () => {

    return(

        <section id="breadcrumb" className="app-breadcrumb row">
            <div className="breadcrumb-item-container col-12">
                <BrowserRouter>
                    <Link to="/" className="breadcrumb-item">Home</Link>
                    <span className="seperator">/</span>
                    <Link to="/new" className="breadcrumb-item">New</Link>
                    <span className="seperator">/</span>
                    <span className="breadcrumb-item">New products</span>
                </BrowserRouter>
            </div>
        </section>

    );

};

export default Breadcrumb;