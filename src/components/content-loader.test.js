import React from 'react';
import { shallow } from 'enzyme';
import ContentLoader from "./content-loader";

describe(`Tests the content-loader.js file content`, () => {

    const contentLoader = shallow(<ContentLoader />);

    it(`should contain a section with an ID of content-loader`, () => {

        const section = contentLoader.find(`section#content-loader`);

        expect(section).toBeDefined();

    });

    it(`should contain a div with an ID of content-loader`, () => {

        const loadingIconContainer = contentLoader.find(`#loading-icon`);

        expect(loadingIconContainer).toBeDefined();

    });

    it(`should contain a spinner icon`, () => {

        const spinner = contentLoader.find(`.spinner`);

        expect(spinner).toBeDefined();

    });

    it(`should contain a h1 with an ID of loading-title and contain text`, () => {

        const loadingText = contentLoader.find(`h1#loading-title`);

        expect(loadingText).toBeDefined();
        expect(loadingText.text()).toBe(`Fetching products...`);

    });

});