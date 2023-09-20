const Input = ({ children, inputType }) => {
  let typei = "";
  let classn = "";

  switch (inputType) {
    case "quickSearch":
      typei = "text";
      classn =
        "border border-green-500 rounded-md p-2 focus:outline-none focus:border-green-600";
      break;
    default:
      break;
  }

  return <input type={typei} className={classn} placeholder={children} />;
};

export default Input;
