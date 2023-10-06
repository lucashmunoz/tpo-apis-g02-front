import styled from "styled-components";

const HorizontalSpace = styled.div`
  height: 5px;
`;

const InputTag = styled.input`
  border: solid
    ${(props) => (props.$inputType === "primary" ? "2px #22c55e" : "1px black")};
  width: 100%;
  border-radius: 5px;
  padding: 8px 16px;

  &:hover {
    border-color: #22c55e;
  }
`;

const Input = ({
  id,
  placeholder,
  labelText,
  inputType,
  onChangeHandler,
  value,
  type = "text"
}) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      {labelText && <HorizontalSpace />}
      <InputTag
        id={id}
        type={type}
        placeholder={placeholder}
        $inputType={inputType}
        onChange={onChangeHandler}
        value={value}
      />
    </>
  );
};

export default Input;
