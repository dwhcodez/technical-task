// Import React core components
import React from 'react';

// Import images
import logo from '../images/logo.svg';

// Import iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faHeart, faAngleDown, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

// Stateless component
const Header = () => {

    return(

        <header id="header" className="app-header">
            <section id="mobile-header" className="d-md-none">
                <div id="hamburger">
                    <FontAwesomeIcon icon={ faBars } />
                    <span id="hambuger-menu-text">Menu</span>
                </div>
                <div className="logo">
                    <img title="Logo" className="site-logo-img" alt="Logo" src={ logo } />
                </div>
                <div id="header-tools-container">
                    <div id="search"><FontAwesomeIcon icon={ faSearch } /></div>
                    <div id="favourites"><FontAwesomeIcon icon={ faHeart } /></div>
                    <div id="basket"><FontAwesomeIcon icon={ faShoppingBag } /></div>
                </div>
            </section>
            <section id="tablet-header" className="d-none d-md-block">
                <div className="container">
                    <div id="site-tools" className="row">
                        <div id="site-tools-left" className="col-6">
                            <span className="tool-link">Sign in</span>
                            <span className="seperator">|</span>
                            <span className="tool-link">Register</span>
                            <span className="tool-link">Customer service</span>
                        </div>
                        <div id="site-tools-right" className="col-6">
                            <span className="tool-link">UK (£) <FontAwesomeIcon icon={ faAngleDown } /></span>
                            <span className="tool-link">Store finder</span>
                            <span className="tool-link wishlist">Wishlist <FontAwesomeIcon icon={ faShoppingBag } /></span>
                        </div>
                    </div>
                    <div id="logo-container" className="logo row">
                        <img title="Logo" className="site-logo-img" alt="Logo" src={ logo } />
                    </div>
                    <div id="nav-container">
                        <nav id="site-nav">
                            <ul id="site-nav-list">
                                <li className="nav-item highlight">Sale</li>
                                <li className="nav-item">Women</li>
                                <li className="nav-item">Men</li>
                                <li className="nav-item">Girls</li>
                                <li className="nav-item">Boys</li>
                                <li className="nav-item">Baby</li>
                                <li className="nav-item">Home</li>
                                <li className="nav-item">Outdoor</li>
                                <li className="nav-item">Gifts</li>
                                <li className="nav-item">Search <FontAwesomeIcon icon={ faSearch } /></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </header>

    );

};

export default Header;