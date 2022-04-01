import styled from "styled-components";
import PropTypes from "prop-types";
import { myTheme } from "components/template";

export const menuItemBase = styled.li`
  cursor: pointer;
  text-decoration: none;
  h4 {
    font-family: ${(props) => props.theme.font.family};
    font-style: ${(props) => props.theme.font.style};
    font-weight: ${(props) => props.theme.font.weight};
    font-size: ${(props) => props.theme.font.size};
    font-size: ${(props) => props.theme.text};
    user-select: none;
  }
  &:visited {
    color: black;
  }
`;

export const menuItemProps = {
  theme: PropTypes.object,
};

export const menuItemDefaults = {
  theme: {
    font: myTheme.fonts.subtitle,
    text: myTheme.defaultText.text,
  },
};
