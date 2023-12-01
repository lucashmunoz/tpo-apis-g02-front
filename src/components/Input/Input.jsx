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
  onBlur,
  disabled
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
          disabled={disabled}
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
      disabled={disabled}
    />;
  }
};

export default Input;
