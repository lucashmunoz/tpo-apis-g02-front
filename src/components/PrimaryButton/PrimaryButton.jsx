import styled from "styled-components";

const ButtonElement = styled.button`
  width: 100%;
  color: ${(props) => (props.disabled ? "#3ccc71" : "white")};
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "#d3f3df" : "#22c55e")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: 0.25s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#d3f3df" : "#16a34a")};
  }
`;

const PrimaryButton = ({ children, onClick, isDisabled, type }) => {
  return (
    <ButtonElement onClick={onClick} disabled={isDisabled} type={type}>
      {children}
    </ButtonElement>
  );
};

export default PrimaryButton;
