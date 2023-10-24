import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  margin-top: 5px;
  padding: 10px 0;
  border: 1px solid #ebded5;
  border-radius: 5px;

  &:hover {
    border: 1px solid #22c55e;
  }
`;
