import {
  DatePickerBase,
  datePickerDefaults,
  datePickerProps,
} from "./datePickerBase";

const DatePicker = ({ theme, description }) => {
  return <DatePickerBase theme={theme} description={description} />;
};

DatePicker.propTypes = datePickerProps;

DatePicker.defaultProps = datePickerDefaults;

export default DatePicker;
