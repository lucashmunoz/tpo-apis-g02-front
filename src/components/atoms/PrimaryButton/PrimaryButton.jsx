import styled from "styled-components";

const ButtonElement = styled.button`
  width: 100%;
  color: white;
  background-color: ${(props) => (props.disabled ? "grey" : "#22c55e")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#16a34a")};
  }
`;

const PrimaryButton = ({ children, onClick, isDisabled }) => {
  return (
    <ButtonElement
      className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </ButtonElement>
  );
};

export default PrimaryButton;
