// Import React core components
import React from 'react';

// Import iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// Stateless component
const ContentLoader = () => {

    return(

        <section id="content-loader">
            <div id="loading-icon">
                <FontAwesomeIcon icon={ faSpinner } className="fa-spin fa-pulse" />
            </div>
            <h1 id="loading-title">Fetching products...</h1>
        </section>

    );

};

export default ContentLoader;