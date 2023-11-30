import { Select, Wrapper } from "./styles";

const Dropdown = ({
  id,
  labelText,
  options,
  placeholderOptionLabel,
  onChangeHandler,
  className
}) => {
  return (
    <Wrapper className={className}>
      <label htmlFor={id}>{labelText}</label>
      <Select id={id} onChange={onChangeHandler}>
        {placeholderOptionLabel && (
          <option value="" defaultValue>
            {placeholderOptionLabel}
          </option>
        )}

        {options.map(({ value, label }) => {
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
