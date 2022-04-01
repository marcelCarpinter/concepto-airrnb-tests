import {
  ImgBackgroundBase,
  imgBackgroundDefaults,
  imgBackgroundProps,
} from "./imgBackgroundBase";

const ImgBackground = ({ theme, children }) => {
  return <ImgBackgroundBase theme={theme}>{children}</ImgBackgroundBase>;
};

ImgBackground.propTypes = imgBackgroundProps;

ImgBackground.defaultProps = imgBackgroundDefaults;

export default ImgBackground;
