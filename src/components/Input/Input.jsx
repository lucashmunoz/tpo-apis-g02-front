import { HorizontalSpace, InputTag, InputProfileImage } from "./styles";

const Input = ({
  id,
  placeholder,
  labelText,
  inputType,
  onChangeHandler,
  value,
  type = "text",
  profileImage = "false",
  onFocus,
  onBlur
}) => {
  if (profileImage === "false") {
    return (
      <>
        {labelText && (
          <>
            <label htmlFor={id}>{labelText}</label>
            <HorizontalSpace />
          </>
        )}
        <InputTag
          id={id}
          type={type}
          placeholder={placeholder}
          $inputType={inputType}
          onChange={onChangeHandler}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </>
    );
  } else {
    <InputProfileImage
      id={id}
      type={type}
      placeholder={placeholder}
      $inputType={inputType}
      onChange={onChangeHandler}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
    />;
  }
};

export default Input;
