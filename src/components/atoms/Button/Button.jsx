import styled from "styled-components";

const ButtonElement = styled.button`
  width: 100%;
`;

const Button = ({ children, buttonType, onClick }) => {
  const getButtonClassName = () => {
    const classNamePrimary =
      "bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded";
    const classNameSecondary =
      "bg-white border border-black rounded-lg hover:bg-gray-200 py-2 px-4";

    switch (buttonType) {
      case "primary":
        return classNamePrimary;
      case "secondary":
        return classNameSecondary;
      default:
        return "";
    }
  };

  return (
    <ButtonElement className={getButtonClassName()} onClick={onClick}>
      {children}
    </ButtonElement>
  );
};

export default Button;
