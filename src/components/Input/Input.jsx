import { HorizontalSpace, InputTag } from "./styles";

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
