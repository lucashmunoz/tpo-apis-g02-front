import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  margin-top: 5px;
`;

const Dropdown = ({ labelText, options, id }) => {
  return (
    <Wrapper>
      <label for={id}>{labelText}</label>
      <Select id={id}>
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
