import { styled } from "@mui/system";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import { myTheme } from "components/template";

export const ImgBackgroundBase = styled(Card)`
  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.theme.image.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const imgBackgroundProps = {
  theme: PropTypes.object,
};
export const imgBackgroundDefaults = {
  theme: {
    image: myTheme.Image,
  },
};
