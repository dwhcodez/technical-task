// Import React core components
import React from 'react';

// Import iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

// Stateless component
class ScrollToTop extends React.Component {

    state = {
        showScrollToTop: false,
        scrollYPosition: 280
    };

    /**
     * Method to scroll top the top of the page on click
     */
    scrollToTopEvent() {
        window.scrollTo(0, 0);
    };

    /**
     * Private method to get window's scroll position and set the state accordingly
     */
    _getScrollPosition = () => {
        window.addEventListener("scroll", (e) => {
            window.scrollY > this.state.scrollYPosition ? (
                this.setState({
                    showScrollToTop: true
                })
            ) : (
                this.setState({
                    showScrollToTop: false
                })
            );
        });
    };

    /**
     * Functionality to perform once the component has mounted
     */
    componentDidMount() {
        this._getScrollPosition();
    }

    render() {
        return(

            <div id="scroll-to-top-container">
                {
                    this.state.showScrollToTop ? (
                        <button id="scroll-to-top" className="button button-secondary" onClick={ this.scrollToTopEvent }>
                            <FontAwesomeIcon icon={ faAngleUp } />
                        </button>
                    ) : (
                        null
                    )
                }
            </div>

        );
    }

}

export default ScrollToTop;