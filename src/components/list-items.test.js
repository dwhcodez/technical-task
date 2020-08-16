import React from 'react';
import { shallow } from 'enzyme';
import ListItems from './list-items';

xdescribe(`Tests the list-items.js file content`, () => {

    const listItems = shallow(<ListItems />);

    describe(`Testing the list items page shows the correct content`, () => {

        beforeEach(() => {

            listItems.setState({
                isLoaded: true,
                isError: false ,
                items: [
                    {
                        "id": 1,
                        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                        "price": 109.95,
                        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                        "category": "men clothing",
                        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Mens Casual Premium Slim Fit T-Shirts ",
                        "price": 22.3,
                        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                        "category": "men clothing",
                        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    }
                ]
            });

        });

        it(`should contain a div with an ID of list-items`, () => {

            const lisItemsContainer = listItems.find(`#content-info #list-items`);

            expect(lisItemsContainer).toBeDefined();

        });

        it(`should contain a category subtitle`, () => {

            const categorySubtitle = listItems.find(`#content-info #category-subtitle`);

            expect(categorySubtitle).toBeDefined();
            expect(categorySubtitle.text()).toBe(`New Products`);

        });

        it(`should contain a category blurb`, () => {

            const categoryBlurb = listItems.find(`#content-info #category-blurb`);

            expect(categoryBlurb).toBeDefined();
            expect(categoryBlurb.text()).toBe(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet beatae delectus distinctio doloribus ducimus explicabo magni molestias neque, nobis officiis praesentium quod quos sunt, ullam veniam voluptatibus. Est, suscipit.`);

        });

        it(`should contain a list filters section`, () => {

            const listFiltersContainer = listItems.find(`#list-filters`);
            const listFilter = listItems.find(`#list-filters .list-filter`);
            const listSort = listItems.find(`#list-filters .list-sort`);

            expect(listFiltersContainer).toBeDefined();
            expect(listFilter).toBeDefined();
            expect(listFilter.text()).toBe(`Filter <FontAwesomeIcon />`);
            expect(listSort).toBeDefined();
            expect(listSort.text()).toBe(`Sort by <FontAwesomeIcon />`);

        });

        it(`should contain an item count`, () => {

            const itemCount = listItems.find(`#item-count`);

            expect(itemCount).toBeDefined();

            expect(itemCount.text()).toBe(`2 products found`);

        });

        it(`should contain an item list`, () => {

            const itemList = listItems.find(`#item-list`);

            expect(itemList).toBeDefined();

        });

        it(`should show the loading page when isLoaded is set to true,`, () => {

            listItems.setState({
                isLoaded: true,
                isError: false ,
                items: []
            });

            expect(listItems.contains(`#list-items`)).toBe(false);
            expect(listItems.contains(`#error-page`)).toBe(false);

            const loadingPage = listItems.find(`#item-list`);

            expect(loadingPage).toBeDefined();

        });

        it(`should show the error page when isError is set to true,`, () => {

            listItems.setState({
                isLoaded: false,
                isError: true ,
                items: []
            });

            expect(listItems.contains(`#list-items`)).toBe(false);
            expect(listItems.contains(`#item-list`)).toBe(false);

            const errorPage = listItems.find(`#error-page`);

            expect(errorPage).toBeDefined();

        });

    });

});