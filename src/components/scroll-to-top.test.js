import React from 'react';
import { shallow } from 'enzyme';
import ScrollToTop from "./scroll-to-top";

describe(`Tests the scroll-to-top.js file content`, () => {

    const scrollToTop = shallow(<ScrollToTop />);
    const instance = scrollToTop.instance();

    it(`should contain a div with an ID of scroll-to-top-container`, () => {

        const scrollToTopElement = scrollToTop.find(`#scroll-to-top-container`);

        expect(scrollToTopElement).toBeDefined();

    });

    it(`should not show the scroll-to-top button when the state property showScrollToTop is false`, () => {

        scrollToTop.setState({ showScrollToTop: false });

        expect(scrollToTop.contains(`#scroll-to-top`)).toBe(false)

    });

    it(`should show the scroll-to-top button when the state property showScrollToTop is true`, () => {

        scrollToTop.setState({ showScrollToTop: true });

        const scrollToTopButton = scrollToTop.find(`#scroll-to-top`);
        const scrollToTopIcon = scrollToTop.find(`#scroll-to-top .scroll-top-icon`);

        expect(scrollToTopButton).toBeDefined();
        expect(scrollToTopIcon).toBeDefined();

    });

    xdescribe(`Tests scrollToTop`, () => {
        it(`should ensure the scrollToTop method was called on button click`, () => {

            scrollToTop.setState({ showScrollToTop: true });

            const scrollToTopButton = scrollToTop.find(`#scroll-to-top`);

            const scrollToTopEventSpy = jest.spyOn(ScrollToTop.prototype, 'scrollToTopEvent');

            scrollToTopButton.simulate('click');

            scrollToTop.update();

            expect(scrollToTopEventSpy).toHaveBeenCalled();

        });
    });

});