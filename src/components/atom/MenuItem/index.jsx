import React from "react";

import { myTheme } from "components/template";

import {
  menuItemBase as MenuItemBase,
  menuItemProps,
  menuItemDefaults,
} from "./MenuItemBase";

/*
const MenuItem = styled.li`
     display: block;
  padding-left: 1rem;
  align-items: right;
  width: auto; 

  //font
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
`;
*/

function MenuItem({ theme, name = myTheme.defaultText.text, path }) {
  return (
    <MenuItemBase theme={theme} as="a" href={path}>
      <h4>{name}</h4>
    </MenuItemBase>
  );
}

MenuItem.propTypes = menuItemProps;

MenuItem.defaultProps = menuItemDefaults;

export default MenuItem;
