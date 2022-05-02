import {mount, shallow} from "enzyme";
import {act} from "react-dom/test-utils";

import Logo from "../../atom/Logo";
import { menuOptions } from "const/menu";
import MenuItem from "../../atom/MenuItem";
import Header from "./index";
import React from "react";
import MenuList from "../../molecule/MenuList";

//https://blog.jscrambler.com/testing-react-with-enzyme
let component;
let element;
describe("The component is rendered", () => {
    it('Rendering Logo', () => {
        act(() => {
            component = shallow(<Header options={menuOptions}/>);
        });

        expect(component.containsMatchingElement(
            <Logo />
        )).toEqual(true);
    });

    it('Rendering Menu', () => {
        act(() => {
            component = shallow(<Header options={menuOptions}/>);
        });
        const MenuItems = menuOptions.map((item, index) => {
            return <MenuItem key={index} name={item.name} path={item.path} />;
        });

        expect(component.containsMatchingElement(
            <MenuList>{MenuItems}</MenuList>
        )).toEqual(true);
    });

});