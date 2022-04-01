import { styled } from "@mui/system";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { myTheme } from "components/template";

export const ButtonBase = styled(Button)`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.customcolor == "secundary"
      ? props.theme.button.secundary
      : props.theme.button.background};
  color: ${(props) =>
    props.customcolor == "secundary"
      ? props.theme.button.secundaryfontcolor
      : props.theme.button.secundary};
  border-radius: ${(props) => props.theme.button.border.radius};
`;

export const buttonProps = {
  theme: PropTypes.object,
  name: PropTypes.string,
  customcolor: PropTypes.string,
};

export const buttonDefaults = {
  theme: {
    button: myTheme.button,
  },
  name: myTheme.defaultText.text,
  customcolor: "",
};
