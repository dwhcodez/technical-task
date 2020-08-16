import React from 'react';
import { shallow } from 'enzyme';
import Header from "./header";

describe(`Tests the header.js file content`, () => {

    const header = shallow(<Header />);

    it(`should contain a header with an ID of app-header`, () => {

        const headerElement = header.find(`header#app-header`);

        expect(header).toBeDefined();

    });

    it(`should contain a mobile header and a tablet header`, () => {

        const mobileHeader = header.find(`#mobile-header`);
        const tabletHeader = header.find(`#tablet-header`);

        expect(mobileHeader).toBeDefined();
        expect(tabletHeader).toBeDefined();

    });

    describe(`Tests the Mobile header`, () => {

        it(`should contain a div with an ID of hamburger`, () => {

            const hamburger = header.find(`div#hamburger`);

            expect(hamburger).toBeDefined();

        });

        it(`should have an icon and text within hamburger`, () => {

            const hamburgerIcon = header.find(`.hamburger-icon`);
            const hamburgerText = header.find(`#hambuger-menu-text`);

            expect(hamburgerIcon).toBeDefined();
            expect(hamburgerText).toBeDefined();
            expect(hamburgerText.text()).toBe(`Menu`);

        });

        it(`should contain a image with a class of site-logo-img`, () => {

            const image = header.find(`img.site-logo-img`);

            expect(image).toBeDefined();

        });

        it(`should contain a div with an ID of header-tools-container and contain 3 icons`, () => {

            const toolsContainer = header.find(`#header-tools-container`);
            const toolsContainerIcons = header.find('#header-tools-container div').length;
            const iconSearch = header.find('#search');
            const iconFavourites = header.find('#favourites').length;
            const iconBasket = header.find('#basket').length;

            expect(toolsContainer).toBeDefined();
            expect(toolsContainerIcons).toBe(3);
            expect(iconSearch).toBeDefined();
            expect(iconFavourites).toBeDefined();
            expect(iconBasket).toBeDefined();

        });

    });

    describe(`Tests for the Tablet header`, () => {

        it(`should contain a div with an ID site-tools`, () => {

            const siteTools = header.find(`#site-tools`);

            expect(siteTools).toBeDefined();

        });

        it(`should contain a div with an ID site-tools-left and one with site-tools-right`, () => {

            const siteToolsLeft = header.find(`#site-tools-left`);
            const siteToolsRight = header.find(`#site-tools-right`);

            expect(siteToolsLeft).toBeDefined();
            expect(siteToolsRight).toBeDefined();

        });

        it(`should contain the correct elements and content within site-tools-left`, () => {

            const linkTools = [`Sign in`, `Register`, `Customer service`];

            const siteToolsLeft = header.find(`#site-tools-left`);
            const siteToolLeftSpans = header.find(`#site-tools-left span`).length;
            const seperator = header.find(`#site-tools-left span.seperator`);

            expect(siteToolsLeft).toBeDefined();
            expect(siteToolLeftSpans).toBe(4);
            expect(seperator).toBeDefined();
            expect(seperator.text()).toBe(`|`);

            linkTools.forEach((link, index) => {
                expect(header.find(`#site-tools-left span.tool-link`).at(index).text()).toBe(link);
            });

        });

        it(`should contain the correct elements and content within site-tools-right`, () => {

            const linkTools = [`UK (£) <FontAwesomeIcon />`, `Store finder`, `Wishlist <FontAwesomeIcon />`];

            const siteToolsRight = header.find(`#site-tools-right`);
            const siteToolRightSpans = header.find(`#site-tools-right span`).length;

            expect(siteToolsRight).toBeDefined();
            expect(siteToolRightSpans).toBe(3);

            linkTools.forEach((link, index) => {
                expect(header.find(`#site-tools-right span.tool-link`).at(index).text()).toBe(link);
            });

        });

        it(`should contain an image with a class of site-logo-img`, () => {

            const siteLogoImage = header.find(`#logo-container .site-logo-img`);

            expect(siteLogoImage).toBeDefined();

        });

        it(`should contain a site nav with the correct elements and content`, () => {

            const siteNav = [`Sale`, `Women`, `Men`, `Girls`, `Boys`, `Baby`, `Home`, `Outdoor`, `Gifts`, `Search <FontAwesomeIcon />`];

            const navContainer = header.find(`#nav-container`);
            const nav = header.find(`#nav-container #site-nav #site-nav-list`);

            expect(navContainer).toBeDefined();
            expect(nav).toBeDefined();

            siteNav.forEach((nav, index) => {
                expect(header.find(`#nav-container #site-nav #site-nav-list .nav-item`).at(index).text()).toBe(nav);
            });

        });

        it(`should contain a class of highlight on the first nav item`, () => {


            const navItem = header.find(`#nav-container #site-nav #site-nav-list .nav-item`).at(0);

            expect(navItem.hasClass(`highlight`)).toBe(true)

        });

    });

});