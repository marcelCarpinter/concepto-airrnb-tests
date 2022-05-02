import {mount, shallow} from "enzyme";
import index from 'index';
import Logo from "../../atom/Logo";


describe("The component is rendered", () => {
    it('Rendering...', () => {
        const wrapper = shallow(<index />);
        expect(wrapper.find('input[type="text"]')).toBeTruthy();
    });

    /*it('Rendering child...', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.containsMatchingElement(<Logo/>)).toEqual(true);
    });*/
});