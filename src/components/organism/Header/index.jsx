import React from "react";
import styled from "styled-components";

//React Components
import Logo from "components/atom/Logo";
import MenuItem from "components/atom/MenuItem";
import MenuList from "components/molecule/MenuList";

//Variables
import { menuOptions } from "const/menu";

const Header = styled.div`
  top: 0%;
  display: flex;
  width: 85%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  border-radius: 30px;
  margin-top: 10px;
`;

export default function index({ options = menuOptions }) {
  const MenuItems = options.map((item, index) => {
    return <MenuItem key={index} name={item.name} path={item.path} />;
  });
  return (
      <>
          <Logo />
          <MenuList>{MenuItems}</MenuList>
      </>
  );
}
