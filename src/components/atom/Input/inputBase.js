import styled from "styled-components";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { myTheme } from "components/template";

export const InputBase = styled(TextField)`
  width: 100%;

  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.size};
  font-weight: ${(props) => props.theme.font.weight};
  color: ${(props) => props.theme.color.default};
`;

export const inputProps = {
  theme: PropTypes.object,
  description: PropTypes.string,
};

export const inputDefaults = {
  theme: {
    font: myTheme.fonts.text,
    color: myTheme.color,
  },
  description: myTheme.defaultText.text,
};
