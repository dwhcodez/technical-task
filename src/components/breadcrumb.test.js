import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './breadcrumb';

describe(`Tests the breadcrumb.js file content`, () => {

    const breadcrumb = shallow(<Breadcrumb />);

    it(`should contain a section with an ID of breadcrumb`, () => {

        const section = breadcrumb.find(`section#breadcrumb`);

        expect(section).toBeDefined();

    });

    it(`should contain a div with an class of breadcrumb-item-container`, () => {

        const div = breadcrumb.find(`div.breadcrumb-item-container`);

        expect(div).toBeDefined();

    });

    it('should contain 3 breadcrumb items with a class of breadcrumb-item', () => {

        const breadcrumbItems = breadcrumb.find('.breadcrumb-item').length;

        expect(breadcrumbItems).toBe(3);

    });

    it('should contain 2 breadcrumb seperators with a class of seperator', () => {

        const seperators = breadcrumb.find('.seperator').length;

        expect(seperators).toBe(2);

    });

    it('should contain the correct text in each breadcrumb link', () => {

        const breadcrumbItem1 = breadcrumb.find('.breadcrumb-item').at(0);
        const breadcrumbItem2 = breadcrumb.find('.breadcrumb-item').at(1);
        const breadcrumbItem3 = breadcrumb.find('.breadcrumb-item').at(2);

        expect(breadcrumbItem1.text()).toBe('Home');
        expect(breadcrumbItem2.text()).toBe('New');
        expect(breadcrumbItem3.text()).toBe('New products');

    });

    it('should contain the correct text in each seperator', () => {

        const seperator1 = breadcrumb.find('.seperator').at(0);
        const seperator2 = breadcrumb.find('.seperator').at(1);

        expect(seperator1.text()).toBe('/');
        expect(seperator2.text()).toBe('/');

    });

});