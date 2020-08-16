import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from "./error-page";

describe(`Tests the error-page.js file content`, () => {

    const errorPage = shallow(<ErrorPage />);

    it(`should contain a section with an ID of error-page`, () => {

        const section = errorPage.find(`section#error-page`);

        expect(section).toBeDefined();

    });

    it(`should contain a h1 with an ID of error-title and contain text`, () => {

        const errorTitle = errorPage.find('h1#error-title');

        expect(errorTitle).toBeDefined();
        expect(errorTitle.text()).toBe(`Oh no!`);

    });

    it(`should contain a P with an ID of error-message and contain text`, () => {

        const errorMessage = errorPage.find(`p#error-message`);

        expect(errorMessage).toBeDefined();
        expect(errorMessage.text()).toBe(`We can't find what you're looking for right now, click below to head to the homepage while we try and fix it :(`);

    });

    it(`should contain a link with an ID of error-button and contain text`, () => {

        const errorButton = errorPage.find(`#error-button`);

        expect(errorButton).toBeDefined();
        expect(errorButton.text()).toBe(`Home`);

    });

});