import styled from "styled-components";

const ButtonElement = styled.button`
  width: 100%;
  color: #0a0a0a;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "grey" : "#22c55e")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: 0.25s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#16a34a")};
  }
`;

const PrimaryButton = ({ children, onClick, isDisabled }) => {
  return (
    <ButtonElement onClick={onClick} disabled={isDisabled}>
      {children}
    </ButtonElement>
  );
};

export default PrimaryButton;
