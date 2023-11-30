import styled from "styled-components";

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  color: #0898ff;
  background: transparent;
`;

const TextButton = ({ children, onClick, type }) => {
  return (
    <Button onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export default TextButton;
