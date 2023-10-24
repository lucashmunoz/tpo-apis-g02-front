import styled from "styled-components";

export const DivRegister = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormRegister = styled.div`
  background-color: #f3f4f6;
  display: flex;
  width: 40%;
  padding: 20px 60px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 10px;
    width: calc(100% - 20px);
  }
`;

export const DivInputs = styled.div`
  margin-bottom: 20px;
`;

export const DivImage = styled.div`
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  width: 120px;
  border: 2px solid black;
  border-radius: 150px;
  background-color: white;
`;

export const ErrorShow = styled.a`
  color: red;
  display: block;
`;

export const InputDiv = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const Experiencia = styled.textarea`
  height: 150px;
  margin-top: 8px;
  padding: 10px;
`;
