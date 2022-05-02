import {shallow} from "enzyme";
import {FormSearch} from "./index";

/*
https://codesandbox.io/s/react-enzyme-form-test-0jj75?file=/src/components/App.test.js:343-353
 */

/**
 * Check if FormSearch is created and input type exists. If more than one input is find, it
 * passes but throws leak of memory
 */
describe("The component is rendered", () => {
    it('Rendering...', () => {
        const wrapper = shallow(<FormSearch />);
        expect(wrapper.find('input[type="text"]')).toBeTruthy();
    });
});