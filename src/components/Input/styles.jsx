import styled from "styled-components";

export const HorizontalSpace = styled.div`
  height: 5px;
`;

export const InputTag = styled.input`
  border: solid
    ${(props) => (props.$inputType === "primary" ? "2px #22c55e" : "1px black")};
  width: 100%;
  border-radius: 5px;
  padding: 8px 16px;

  &:hover {
    border-color: #22c55e;
  }
`;

export const InputProfileImage = styled.input`
  border-radius: 50%;
  border: 1px solid black;
  width: 100%;
  border-radius: 5px;
  padding: 8px 16px;
  &:hover {
    border-color: #22c55e;
  }
`;
