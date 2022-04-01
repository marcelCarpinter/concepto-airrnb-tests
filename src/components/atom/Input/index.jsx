import { InputBase, inputDefaults, inputProps } from "./inputBase";

const Input = ({ theme, description, helper }) => {
  return <InputBase theme={theme} label={description} variant="filled" />;
};

Input.propTypes = inputProps;

Input.defaultProps = inputDefaults;

export default Input;
