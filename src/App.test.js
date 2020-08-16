import React from 'react';
import { shallow } from "enzyme/build";
import App from './App';

describe(`Test the App.js file`, () => {

    const app = shallow(<App />);

    it(`should render the app`, () => {

        const appContainer = app.find(`.app`);

        expect(appContainer).toBeDefined();

    });

});
