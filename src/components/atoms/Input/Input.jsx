import styled from "styled-components";

const Label = styled.label``;

const InputTag = styled.input`
  margin-top: 5px;
  border: solid
    ${(props) => (props.$inputType === "primary" ? "2px #22c55e" : "1px black")};
  width: 100%;
  border-radius: 5px;
  padding: 8px 16px;
`;

const Input = ({
  id,
  placeholder,
  labelText,
  inputType,
  onChangeHandler,
  value
}) => {
  return (
    <>
      <Label htmlFor={id}>{labelText}</Label>
      <InputTag
        id={id}
        type="text"
        placeholder={placeholder}
        $inputType={inputType}
        onChange={onChangeHandler}
        value={value}
      />
    </>
  );
};

export default Input;
