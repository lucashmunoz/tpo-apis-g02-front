import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  margin-top: 5px;
  padding: 10px 0;
  border: 1px solid #ebded5;
  border-radius: 5px;

  &:hover {
    border: 1px solid #22c55e;
  }
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
