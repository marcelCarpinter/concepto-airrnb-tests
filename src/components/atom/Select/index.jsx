import { SelectBase, selectDefaults, selectProps } from "./selectBase";

const Select = ({ theme, description, options }) => {
  return (
    <SelectBase
      theme={theme}
      description={description}
      options={options}
      variant="filled"
    />
  );
};

Select.propTypes = selectProps;

Select.defaultProps = selectDefaults;

export default Select;
