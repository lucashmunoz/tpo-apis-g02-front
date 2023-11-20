import styled from "styled-components";

export const Wrapper = styled.div`
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

export const FormRegister = styled.form`
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

export const ImageContainer = styled.div`
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

export const TextFieldsContainer = styled.div`
  margin-bottom: 20px;
`;

export const TextFieldContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const ErrorShow = styled.p`
  color: red;
  display: block;
`;

export const Experiencia = styled.textarea`
  height: 150px;
  margin-top: 8px;
  padding: 10px;
`;
