import styled from "styled-components";

const Label = styled.label``;

const InputTag = styled.input`
  margin-top: 5px;
  border: 2px solid
    ${(props) => (props.$inputType === "primary" ? " #22c55e" : " black")};
  width: 100%;
  border-radius: 5px;
  padding: 8px 16px;
`;

const Input = ({ id, placeholder, labelText, inputType, onChangeHandler }) => {
  return (
    <>
      <Label htmlFor={id}>{labelText}</Label>
      <InputTag
        id={id}
        type="text"
        placeholder={placeholder}
        $inputType={inputType}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default Input;
