import { Select, Wrapper } from "./styles";

const Dropdown = ({
  id,
  labelText,
  options,
  placeholderLabel,
  onChangeHandler
}) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{labelText}</label>
      <Select id={id} onChange={onChangeHandler}>
        {placeholderLabel && (
          <option value="" defaultValue>
            {placeholderLabel}
          </option>
        )}

        {options.map((option) => {
          const { value, label } = option;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </Select>
    </Wrapper>
  );
};

export default Dropdown;
