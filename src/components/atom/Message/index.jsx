import { ButtonBase, buttonDefaults, buttonProps } from "./buttonBase";

//material component
import SearchIcon from "@mui/icons-material/Search";

const Button = ({ theme, name, customcolor }) => {
  return (
    <ButtonBase customcolor={customcolor} theme={theme} variant="contained">
      <h1>{name}</h1>
    </ButtonBase>
  );
};

Button.propTypes = buttonProps;

Button.defaultProps = buttonDefaults;

export default Button;

const SearchButton = ({ theme, name, customcolor }) => {
  return (
    <ButtonBase
      theme={theme}
      customcolor={customcolor}
      variant="contained"
      startIcon={<SearchIcon />}
    >
      {name}
    </ButtonBase>
  );
};
SearchButton.propTypes = buttonProps;

SearchButton.defaultProps = buttonDefaults;

export { SearchButton };
