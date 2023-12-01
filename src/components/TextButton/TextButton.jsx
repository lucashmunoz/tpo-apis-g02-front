import styled from "styled-components";

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  color: #0898ff;
  background: transparent;
`;

const TextButton = ({ className, children, onClick, type }) => {
  return (
    <Button className={className} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export default TextButton;
