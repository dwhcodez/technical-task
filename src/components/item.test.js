import React from 'react';
import { shallow } from 'enzyme';
import Item from './item';

describe(`Tests the item.js file content`, () => {

    const itemProps = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    };
    const itemWrapper = shallow(<Item item={ itemProps } />);

    describe(`Testing the item page shows the correct content`, () => {

        it(`should contain a div with an Class of item`, () => {

            const itemContainer = itemWrapper.find(`.item`);

            expect(itemContainer).toBeDefined();

        });

        it(`should contain an image container`, () => {

            const imageContainer = itemWrapper.find(`.item-image-container`);

            expect(imageContainer).toBeDefined();

        });

        it(`should show the item image but no quickview button when quickViewButtonShow is false`, () => {

            itemWrapper.setState({
                quickViewButtonShow: false,
                modalShow: false
            });

            const imageContainer = itemWrapper.find(`img.item-image`);

            expect(imageContainer).toBeDefined();
            expect(itemWrapper.contains(`button.quick-view`)).toBe(false);

        });

        it(`should show the item image and the quickview button when quickViewButtonShow is true`, () => {

            itemWrapper.setState({
                quickViewButtonShow: true,
                modalShow: false
            });

            const imageContainer = itemWrapper.find(`img.item-image`);
            const quickViewButton = itemWrapper.find(`button.quick-view`);

            expect(imageContainer).toBeDefined();
            expect(quickViewButton).toBeDefined();

        });

        it(`should show the item title`, () => {

            const itemTitle = itemWrapper.find(`.item-title`);

            expect(itemTitle).toBeDefined();
            expect(itemTitle.text()).toBe(itemProps.title);

        });

        it(`should show the item price`, () => {

            const itemPrice = itemWrapper.find(`.item-price`);

            expect(itemPrice).toBeDefined();
            expect(itemPrice.text()).toBe(`£${itemProps.price}`);

        });

        it(`should show the modal when the quick view button is clicked`, () => {

            itemWrapper.setState({
                quickViewButtonShow: false,
                modalShow: false
            });

            expect(itemWrapper.contains(`modal-container`)).toBe(false);

            itemWrapper.setState({
                quickViewButtonShow: true,
                modalShow: false
            });

            const quickViewButton = itemWrapper.find(`button.quick-view`);

            quickViewButton.simulate(`click`);

            // Allow the modal to open via animate
            setTimeout(() => {
                expect(itemWrapper.contains(`modal-container`)).toBe(true);

                const modalItemTitle = itemWrapper.find(`.modal-container .modal-item-title`);

                expect(modalItemTitle).toBeDefined();
                expect(modalItemTitle.text()).toBe(itemProps.title);

                const modalItemImage = itemWrapper.find(`.modal-container .quick-view-item-image-container`);

                expect(modalItemImage).toBeDefined();

                const modalItemPrice = itemWrapper.find(`.modal-container .quick-view-item-price span`);

                expect(modalItemPrice).toBeDefined();
                expect(modalItemTitle.text()).toBe(`£${itemProps.price}`);

                const modalItemDescription = itemWrapper.find(`.modal-container .description`);

                expect(modalItemDescription).toBeDefined();
                expect(modalItemTitle.text()).toBe(itemProps.description);

                const modalAddToBagButton = itemWrapper.find(`.modal-container .quick-view-add-to-bag`);

                expect(modalAddToBagButton).toBeDefined();

                const modalSaveToFavouritesButton = itemWrapper.find(`.modal-container .quick-view-add-to-favourites`);

                expect(modalSaveToFavouritesButton).toBeDefined();

                const modalCloseButton = itemWrapper.find(`.modal-container .close`);

                expect(modalCloseButton).toBeDefined();

                modalCloseButton.simulate(`click`);

                setTimeout(() => {
                    expect(itemWrapper.contains(`modal-container`)).toBe(false);
                }, 1000);
            }, 1000);

        });

    });

});