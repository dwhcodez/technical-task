// Import React core components
import React from 'react';

// Import components
import ContentLoader from './content-loader';
import ErrorPage from './error-page';
import Item from './item';
import ScrollToTop from './scroll-to-top';
import { connect } from 'react-redux';

// Import iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class ListItems extends React.Component {

    // Set the React state properties
    state = {
        error: null,
        isLoaded: false,
        isError: false,
        showMoreBlurb: false,
        itemsToShow: 10,
        itemsToExpand: 10
    };

    /**
     * Method to toggle the showMoreBlurb state property
     */
    toggleMoreBlurb = () => {
        this.setState({
            showMoreBlurb: !this.state.showMoreBlurb
        });
    };

    showMoreItems = () => {
        this.setState((state) => ({
            itemsToShow: state.itemsToShow += state.itemsToExpand
        }));
    };

    /**
     * Functionality to perform once the component has mounted
     */
    componentDidMount() {
        fetch("data/api-data.json")
            .then(
                res => res.json()
            )
            .then(
                (result) => {
                    this.props.dispatch({type: 'FETCH_ITEMS', items: result});
                    this.setState({
                        isLoaded: true,
                        isError: false,
                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        isError: true,
                        error
                    });
                }
            )
    }

    render () {
        return (
            <div id="content-loading-container">
                {
                    // Check to see if the page is still loading
                    this.state.isLoaded ? (

                        // Check to see if the fetch request has returned an error
                        this.state.isError ? (
                            // Error is true, show the error page
                            <ErrorPage />
                        ) : (
                            // Show the content
                            <div id="list-items">
                                <section id="content-info" className="row">
                                    <div id="category-subtitle" className="col-12">New Products</div>
                                    <div id="category-blurb" className={`col-12 ${this.state.showMoreBlurb ? 'open' : 'closed'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet beatae delectus distinctio doloribus ducimus explicabo magni molestias neque, nobis officiis praesentium quod quos sunt, ullam veniam voluptatibus. Est, suscipit.</div>
                                    {this.state.showMoreBlurb ? (
                                        <span id="category-read-more" className="col-12" onClick={ this.toggleMoreBlurb }>Read less <FontAwesomeIcon icon={ faAngleUp } /></span>
                                    ) : (
                                        <span id="category-read-more" className="col-12" onClick={ this.toggleMoreBlurb }>Read more <FontAwesomeIcon icon={ faAngleDown } /></span>
                                    )}
                                </section>
                                <section id="list-filters" className="row">
                                    <div className="col-6 list-filter">Filter <FontAwesomeIcon icon={ faAngleRight } /></div>
                                    <div className="col-6 list-sort">Sort by <FontAwesomeIcon icon={ faAngleRight } /></div>
                                </section>
                                <section id="item-count">
                                    <span>{ this.props.items.length } products found</span>
                                </section>
                                <section id="item-list" className="row">
                                    {this.props.items.slice(0, this.state.itemsToShow).map(item => (

                                        // Loop over the received items and call a single item component passing in the mapped item as a prop
                                        <Item key={ item.id } item={ item } />

                                    ))}
                                </section>
                                { this.state.itemsToShow < this.props.items.length ? (
                                    <section id="show-more">
                                        <div className="button-container">
                                            {
                                                // Check to see how many products are left to show
                                                // If there are less than this.state.itemsToExpand to show then show the few remaining items count button
                                                // Else show this.state.itemsToExpand count button
                                                (this.props.items.length - this.state.itemsToShow) < this.state.itemsToExpand ? (
                                                    <button id="show-more-button" className="button button-primary" onClick={ this.showMoreItems }>
                                                        Show { this.props.items.length - this.state.itemsToShow } more
                                                    </button>
                                                ) : (
                                                    <button id="show-more-button" className="button button-primary" onClick={ this.showMoreItems }>
                                                        Show { this.state.itemsToExpand } more
                                                    </button>
                                                )
                                            }
                                        </div>
                                    </section>
                                ) : (
                                    null
                                ) }
                                <ScrollToTop />
                            </div>
                        )
                    ) : (
                        // Show the content loader
                        <ContentLoader />
                    )
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => {

    return {
        items: state.items
    }

};

export default connect(mapStateToProps)(ListItems);
