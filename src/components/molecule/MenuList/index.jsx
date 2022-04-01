import React from "react";
import styled from "styled-components";
import { myTheme } from "components/template";

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  right: 0;
  margin-left: auto;
  margin-top: 0px;
  a {
    display: inline-block;
    padding-left: 3rem;
    align-items: right;
    width: auto;
    white-space: nowrap;
  }
`;

export default function index({ children = myTheme.defaultText.listText }) {
  return <MenuList>{children}</MenuList>;
}
