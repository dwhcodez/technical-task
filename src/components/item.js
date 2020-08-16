// Import React core components
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

// Import Bootstrap JS components
import { Modal } from 'react-bootstrap';

// Import iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

class Item extends React.Component {

    // Set the React state properties
    state = {
        quickViewButtonShow: false,
        modalShow: false
    };

    /**
     * Method to toggle the quickViewButtonShow state property
     */
    toggleQuickViewButton = () => {
        this.setState({
            quickViewButtonShow: !this.state.quickViewButtonShow
        });
    };

    /**
     * Method to toggle the modalShow state property
     */
    toggleModal = () => {
        this.setState({
            modalShow: !this.state.modalShow
        });
    };

    render () {
        // Destructure the inputted props for easier reference
        const { item } = this.props;

        return (
            <div className="item col-6">
                <BrowserRouter>
                    <div className="item-image-container" onMouseEnter={ this.toggleQuickViewButton } onMouseLeave={ this.toggleQuickViewButton }>
                        { this.state.quickViewButtonShow && (
                            <button className="quick-view button button-primary" onClick={ this.toggleModal }>
                                <FontAwesomeIcon icon={ faSearch } className="quick-view-search-icon" /> <span>Quick view</span>
                            </button>
                        ) }
                        <Link to={`/product-details?id=${ item.id }`}>
                            <img src={ item.image } alt={ item.title } className="item-image" />
                        </Link>
                    </div>
                    <Link to={`/product-details?id=${ item.id }`} className="item-title">
                        <span>{ item.title }</span>
                    </Link>

                    <div className="item-price">
                        <span>£{ item.price }</span>
                    </div>

                    <Modal show={this.state.modalShow} onHide={this.toggleModal} className="modal-container">
                        <Modal.Header closeButton>
                            <Modal.Title>{ item.title }</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="quick-view-item-image-container row">
                                <img src={ item.image } alt={ item.title } className="quick-view-item-image col-12" />
                            </div>
                            <div className="quick-view-item-price row">
                                <span className="col-12">£{ item.price }</span>
                            </div>
                            <div className="description row">
                                <span className="col-12">{ item.description }</span>
                            </div>
                            <div className="quick-view-button-container row">
                                <button className="quick-view-add-to-bag col-12 button button-featured">
                                    <FontAwesomeIcon icon={ faShoppingBag } /> Add to bag
                                </button>
                                <button className="quick-view-add-to-favourites col-12 button button-primary">
                                    <FontAwesomeIcon icon={ faHeart } /> Save
                                </button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </BrowserRouter>
            </div>
        );
    }

}

export default Item;
