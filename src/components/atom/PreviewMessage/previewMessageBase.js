import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { myTheme } from "components/template";

export const MessageBase = styled(Message)`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.customcolor == "secundary"
      ? props.theme.message.secundary
      : props.theme.message.background};
  color: ${(props) =>
    props.customcolor == "secundary"
      ? props.theme.message.secundaryfontcolor
      : props.theme.message.secundary};
  border-radius: ${(props) => props.theme.message.border.radius};
`;

export const messageProps = {
  theme: PropTypes.object,
  name: PropTypes.string,
  customcolor: PropTypes.string,
};

export const messageDefaults = {
  theme: {
    message: myTheme.message,
  },
  name: myTheme.defaultText.text,
  customcolor: "",
};
