import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Select = styled.select`
  margin-top: 5px;
  padding: 10px 0;
  border: 1px solid grey;
  border-radius: 5px;
`;

const Dropdown = ({
  id,
  labelText,
  options,
  placeholderLabel,
  onChangeHandler
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
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
